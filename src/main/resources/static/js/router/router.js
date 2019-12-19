import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsList from "pages/ProductPage.vue"
import NewProductPage from "pages/NewProductPage.vue";

Vue.use(VueRouter)

const routes = [

    {path: '/showList', component: ProductsList},

    {path: '/addNew', component: NewProductPage}

]

export default new VueRouter({
    mode: 'history',
    routes
})