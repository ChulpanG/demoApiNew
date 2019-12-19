<!--<template>
    <div>
        <v-card class="mx-auto" v-for="order in orderList" :order="order" :key="order.orderID">
            {{order.name}}
        </v-card>
        &lt;!&ndash;<div v-for="order in orderList" :order="order" :key="order.orderID">{{order.orderID}}</div>&ndash;&gt;
    </div>
</template>-->
<template>
    <div>

        <v-card
                class="mx-auto"
                v-for="order in orderList"
                :order="order"
                :key="order.orderID"
                max-width="344"
        >
        <v-container>
            <v-row justify="space-between">
            <v-card-text>
                <div>{{order.time}}</div>
                <p class="display-1 text--primary">
                  Заказ #{{order.orderID}}
                </p>

                <div class="text--primary">
                    <div><b>Блюда:</b></div>
                    <div v-for="dish in order.dish" :key="dish.dishID">
                        {{dish.dishName}}
                    </div>
                    <div><b>Официант:</b></div>
                    <div>
                        {{order.person.surname}} {{order.person.name}}
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        text
                        color="deep-purple accent-4"
                        @click="del"
                >
                    Удалить
                </v-btn>
            </v-card-actions>
            </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import OrderCard from "components/orders/OrderCard.vue"
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "OrdersList",
        props: ['orders'],
        components: {
            OrderCard,
        },
        computed: mapState(['orderList']),
        methods: {
            ...mapActions(['getAllOrder', 'removeOrderAction']),

            editOrder(order) {
                this.$router.push({path: '/addNew', query: {orderID: order.orderID}})
            },
            del() {
                alert(JSON.stringify(this.order))
                this.removeOrderAction(this.order);
            }

        },
        created(){
            this.getAllOrder()
       }
    }
</script>

<style scoped>
</style>