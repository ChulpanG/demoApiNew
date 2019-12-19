   import Vue from 'vue'
   
   const orderDishes = Vue.resource('/orderDish{/orderid}')
   
   export default {
       add: orderDish => orderDishes.save({}, orderDish),
       update: orderDish => orderDishes.update({dishid: orderDish.dishid}, orderDish),
       getById: id => orderDishes.get({dishid}),
       get: () => orderDishes.get(),
       delete: orderDish => orderDishes.delete({dishid: orderDish.dishid}, orderDish)
   }