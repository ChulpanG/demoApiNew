<template>
    <v-container>
        <orders-list :orders="orders" />
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import OrdersList from "components/orders/OrderList.vue"
    export default {
        name: "OrdersPage",
        components: {
            OrdersList,
        },
        computed: mapState(['orders']),
        methods: {
            ...mapActions(['getOrderById']),
        },
        created() {
            this.getOrderById(this.$route.query.id)
        }
    }
</script>

<style scoped>
</style>