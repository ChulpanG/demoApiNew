import Vue from 'vue'
import Vuex from 'vuex'
import productApi from "models/product"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        product: '',
        productList: [],
    },
    mutations: {
        addProductMutation(state, product) {
            state.productList = [
                ...state.productList,
                product
            ]
        },
        updateProductMutation(state, product) {
            const updateIndex = state.productList.findIndex(item => item.id === product.productid)

            state.productList = [
                ...state.productList.slice(0, updateIndex),
                product,
                ...state.productList.slice(updateIndex + 1)
            ]
        },
        removeProductMutation(state, product) {
            const deletionIndex = state.productList.findIndex(item => item.id === product.productid)

            if (deletionIndex > -1) {
                state.productList = [
                    ...state.productList.slice(0, deletionIndex),
                    ...state.productList.slice(deletionIndex + 1)
                ]
            }
        },
        removeAllProductsMutation(state) {
            state.productList = []
        },
        redactProductMutation(state, product) {
            state.product = product
        }
    },
    actions: {
        async addProductAction({commit}, product) {
            const result = await productApi.add(product)
            const data = await result.json()
            commit('addProductMutation', data)
        },
        async updateProductAction({commit}, product) {
            const result = await productListApi.update(product)
            const data = await result.json()
            commit('updateProductMutation', data)
        },
        async removeProductAction({commit}, product) {
            const result = await productListApi.remove(product.productid)
            if (result.ok && result.data === true) {
                commit('removeProductMutation', product)
            }
        },

        async getProductById({commit}, id) {
            const result = await productApi.getById(id)
            const data = await result.json()

            commit('redactProductMutation', data)
        },

        async getAllProduct({commit}){
            const result = await productApi.get()
            const data = await result.json()

            commit('removeAllProductsMutation', data)
            data.forEach(product => commit('addProductMutation',product))
        }

    }
})