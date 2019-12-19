<template>
    <div>
        <order-element v-for="order in orders"
                           :order = "order"
                           :key="order.orderID"
                           :editOrder="editOrder"/>
    </div>
</template>

<script>
    import OrderForm from "components/orders/order_form.vue"
    export default {
        name: "OrdersList",
        props: ['orders'],
        components: {
            OrderForm,
        },
        methods: {
            editOrder(order) {
                this.$router.push({path: '/addNew', query: {orderID: order.orderID}})
            }
        },
    }
</script>

<style scoped>
</style>