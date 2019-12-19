import Vue from 'vue'

const dishes = Vue.resource('/dish{/dishID}')

export default {
    add: dish => dishes.save({}, dish),
    update: dish => dishes.update({dishID: dish.dishID}, dish),
    getById: dishID => dishes.get({dishID}),
    get: () => dishes.get(),
    delete: dish => dishes.delete({dishID: dish.dishID}, dish)
}