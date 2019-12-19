<template>
    <v-container class="mt-5">
        <v-row>
            <v-col>
                <v-card
                        class="mx-auto"
                        outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content class="align-self-start">
                            <v-list-item-title
                                    class="headline mb-1"
                            >
                                <span class="light-blue--text text--darken-3">{{dish.dishID}}-id., {{dish.name}}
                                м<sup><small>2</small></sup>,
                                {{dish.dishID}}/{{dish.name}} этаж</span>
                            </v-list-item-title>


                        </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>

                        <v-btn @click="del">
                            Удалить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'
    export default {
        name: "DishCard",
        props: ['dish', 'editDish'],

        data() {
            return {
                show: false
            }
        },
        methods: {
            ...mapActions(['removeDishAction']),
            edit() {
                this.editDish(this.dish);
            },
            del() {
                this.removeDishAction(this.dish);
            }
        },
    }
</script>

<style scoped>
</style>