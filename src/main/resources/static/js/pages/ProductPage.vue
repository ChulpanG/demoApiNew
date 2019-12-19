<template>
    <v-container>
        <products-list :products="products" />
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import ProductsList from "components/products/ProductList.vue"
    export default {
        name: "ProductsPage",
        components: {
            ProductsList,
        },
        computed: mapState(['products']),
        methods: {
            ...mapActions(['getProductById']),
        },
        created() {
            this.getProductById(this.$route.query.id)
        }
    }
</script>

<style scoped>
</style>