<template>
    <v-app>
        <v-app-bar app color="white">
            <v-toolbar-title>Ресторан</v-toolbar-title>

            <v-divider
                    class="mx-4"
                    vertical
            ></v-divider>

            <v-btn
                    text
                    href="/"
            >
                Главная
            </v-btn>

            <div class="flex-grow-1"></div>

            <div >

                <v-btn
                        text
                        :disabled="$route.path ==='/addNew'"
                        @click="addNew"
                >
                    Добавить заказ
                </v-btn>
                <v-btn
                        text
                        :disabled="$route.path ==='/showList'"
                        @click="showList"
                >
                    List
                </v-btn>

            </div>
        </v-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "App",

        methods: {
            showList(){
                this.$router.push('/showList')
            },

            addNew() {
                this.$router.push('/addNew')
            }
        },

    }
</script>

<style scoped>
</style>