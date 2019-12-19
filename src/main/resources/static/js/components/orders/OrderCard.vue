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
                                <span class="light-blue--text text--darken-3">{{order.orderID}}-id., {{order.name}}
                                м<sup><small>2</small></sup>,
                                {{order.orderID}}/{{order.name}} этаж</span>
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
        name: "OrderCard",
        props: ['order', 'editOrder'],

        data() {
            return {
                show: false
            }
        },
        methods: {
            ...mapActions(['removeOrderAction']),
            edit() {
                this.editOrder(this.order);
            },
            del() {
                this.removeOrderAction(this.order);
            }
        },
    }
</script>

<style scoped>
</style>