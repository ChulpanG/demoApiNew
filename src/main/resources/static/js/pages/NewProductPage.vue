
<template>
    <v-container>
        <product-form :product="product"/>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'
    import ProductForm from "components/products/ProductForm.vue"
    export default {
        name: "NewProductPage",
        components: {
            ProductForm
        },
        computed: mapState(['product']),
        methods: mapActions(['getProductById']),
        created() {
            if (this.$route.query.id) {
                this.getProductById(this.$route.query.id)
            }
        }
    };
</script>

<style scoped>
</style>