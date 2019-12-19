import Vue from 'vue'

const products = Vue.resource('product{/productid}')

export default {
    add: product => products.save({}, product),
    update: product => products.update({productid: product.productid}, product),
    getById: productID => products.get({productID}),
    get: () => products.get(),
    delete: product => products.delete({productid: product.productid}, product)
}