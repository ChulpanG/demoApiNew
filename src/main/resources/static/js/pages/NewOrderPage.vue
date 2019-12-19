
<template>
    <v-container>
        <order-form :order="order"/>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'
    import OrderForm from "components/orders/OrderForm.vue"
    export default {
        name: "NewOrderPage",
        components: {
            OrderForm
        },
        computed: {
        ...mapState(['order']),
        ...mapState(['dish'])
        },
        methods: {
        ...mapActions(['getOrderById']),
        ...mapActions(['getDishById'])
        },
        created() {
            if (this.$route.query.id) {
                this.getOrderById(this.$route.query.id);

            };
        }
    };
</script>

<style scoped>
</style>