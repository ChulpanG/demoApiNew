<!--<template>
    <div>
        <v-card class="mx-auto" v-for="product in productList" :product="product" :key="product.productID">
            {{product.name}}
        </v-card>
        &lt;!&ndash;<div v-for="product in productList" :product="product" :key="product.productID">{{product.productID}}</div>&ndash;&gt;
    </div>
</template>-->
<template>
    <div>
    <v-card
            class="mx-auto"
            v-for="product in productList"
            :product="product"
            :key="product.productID"
            max-width="344"
    >
        <v-card-text>
            <div>{{product.productID}}</div>
            <p class="display-1 text--primary">
                {{product.name}}
            </p>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    text
                    color="deep-purple accent-4"
            >
                Learn More
            </v-btn>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
    import ProductCard from "components/products/ProductCard.vue"
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "ProductsList",
        props: ['products'],
        components: {
            ProductCard,
        },
        computed: mapState(['productList']),
        methods: {
            ...mapActions(['getAllProduct']),
            editProduct(product) {
                this.$router.push({path: '/addNew', query: {productID: product.productID}})
            }
        },
        created(){
            this.getAllProduct()
       }
    }
</script>

<style scoped>
</style>