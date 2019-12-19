import Vue from 'vue'
import Vuex from 'vuex'
import orderApi from "models/order"
import dishApi from "models/dish"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        order: '',
        orderList: [],
        dish:'',
        dishList:[]
    },
    mutations: {
        addOrderMutation(state, order) {
            state.orderList = [
                ...state.orderList,
                order
            ]
        },
        addDishMutation(state, dish) {
                    state.dishList = [
                        ...state.dishList,
                        dish
                    ]
                },
        updateOrderMutation(state, order) {
            const updateIndex = state.orderList.findIndex(item => item.id === order.orderid)

            state.orderList = [
                ...state.orderList.slice(0, updateIndex),
                order,
                ...state.orderList.slice(updateIndex + 1)
            ]
        },
        removeOrderMutation(state, order) {
            const deletionIndex = state.orderList.findIndex(item => item.id === order.orderid)

            if (deletionIndex > -1) {
                state.orderList = [
                    ...state.orderList.slice(0, deletionIndex),
                    ...state.orderList.slice(deletionIndex + 1)
                ]
            }
        },
        removeAllOrdersMutation(state) {
            state.orderList = []
        },
        removeAllDishesMutation(state) {
                    state.dishList = []
                },
        redactOrderMutation(state, order) {
            state.order = order
        },
        redactDishMutation(state, dish) {
                    state.dish = dish
                }
    },
    actions: {
        async addOrderAction({commit}, order) {
            const result = await orderApi.add(order)
            const data = await result.json()
            commit('addOrderMutation', data)
        },
        async updateOrderAction({commit}, order) {
            const result = await orderListApi.update(order)
            const data = await result.json()
            commit('updateOrderMutation', data)
        },
        async removeOrderAction({commit}, order) {
            const result = await orderApi.delete(order.orderID)
            if (result.ok && result.data === true) {
                commit('removeOrderMutation', order)
            }
        },
        async getOrderById({commit}, id) {
            const result = await orderApi.getById(id)
            const data = await result.json()

            commit('redactOrderMutation', data)
        },
        async getDishById({commit}, id) {
                    const result = await dishApi.getById(id)
                    const data = await result.json()

                    commit('redactDishMutation', data)
                },

        async getAllOrder({commit}){
            const result = await orderApi.get()
            const data = await result.json()

            commit('removeAllOrdersMutation', data)
            data.forEach(order => commit('addOrderMutation',order))
        },

        async getAllDish({commit}){
                    const result = await dishApi.get()
                    const data = await result.json()

                    commit('removeAllDishesMutation', data)
                    data.forEach(dish => commit('addDishMutation',dish))
        },



    }
})