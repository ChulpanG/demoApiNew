import Vue from 'vue'
import VueRouter from 'vue-router'
import OrdersList from "pages/OrderPage.vue"
import NewOrderPage from "pages/NewOrderPage.vue";

Vue.use(VueRouter)

const routes = [

    {path: '/showList', component: OrdersList},

    {path: '/addNew', component: NewOrderPage}

]

export default new VueRouter({
    mode: 'history',
    routes
})