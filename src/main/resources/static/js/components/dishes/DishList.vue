<script>
    import DishCard from "components/dishes/DishCard.vue"
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "DishList",
        props: ['dish'],
        components: {
            DishCard,
        },
        computed: mapState(['dishList']),
        methods: {
            ...mapActions(['getAllDish']),
            editDish(dish) {
                this.$router.push({path: '/addNew', query: {dishID: dish.dishID}})
            }
        },
        created(){
            this.getAllDish()
       }
    }
</script>

<style scoped>
</style>