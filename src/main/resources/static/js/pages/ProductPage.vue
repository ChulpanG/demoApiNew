<template>
    <v-container>
        <dishs-list :dishes="dishes" />
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import DishsList from "components/dishes/DishList.vue"
    export default {
        name: "DishsPage",
        components: {
            DishsList,
        },
        computed: mapState(['dishs']),
        methods: {
            ...mapActions(['getDishById']),
        },
        created() {
            this.getDishById(this.$route.query.id)
        }
    }
</script>

<style scoped>
</style>