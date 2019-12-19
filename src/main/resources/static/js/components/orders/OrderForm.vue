<!--<template>
    <div>


        <v-container fluid>
            <v-row>
                <v-col
                        cols="12"
                        sm="6"
                >
                    <v-text-field
                            label="Введите название продукта"
                            solo
                            v-model="time"
                            :error-messages="timeError"
                            @input="$v.time.$touch()"
                            @blur="$v.time.$touch()"
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        sm="6"
                >
                    <v-text-field
                            label="Введите название продукта"
                            solo
                            v-model="time"
                            :error-messages="timeError"
                            @input="$v.time.$touch()"
                            @blur="$v.time.$touch()"
                    ></v-text-field>
                </v-col>


            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn @click="save" color="light-blue" dark>
                        Добавить
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
        >
            {{ text }}
            <v-btn
                    color="blue"
                    text
                    @click="snackbar = false"
            >
                X
            </v-btn>
        </v-snackbar>
    </div>
</template>-->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card flat>
        <v-snackbar
                v-model="snackbar"
                absolute
                top
                right
                color="success"
        >
            <span>Successful!</span>
            <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field
                                label="Введите время"
                                solo
                                v-model="time"
                                :error-messages="timeError"
                                @input="$v.time.$touch()"
                                @blur="$v.time.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                                label="Выберите официанта"
                                solo
                                v-model="personID"
                                :error-messages="personError"
                                @input="$v.person.$touch()"
                                @blur="$v.person.$touch()"
                        ></v-text-field>
                    </v-col>

                    <
                </v-row>
            </v-container>
            <v-card-actions>
                <v-btn text @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="save" color="light-blue" dark>
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
            <v-card>
                <v-card-title class="title">Terms</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                    {{ content }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            color="purple"
                            @click="terms = false"
                    >Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
            <v-card>
                <v-card-title class="title">Conditions</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                    {{ content }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            color="purple"
                            @click="conditions = false"
                    >Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import {validationMixin} from 'vuelidate'
    import {required, numeric} from 'vuelidate/lib/validators'
    export default {
        time: "OrderForm",
        props: ['order'],
        mixins: [validationMixin],
        validations: {
            personID:{required, numeric},
            time: {required}

        },
        data() {
            return {

                time: '',
                personID: '',
                snackbar: false,
                text: '',
                timeout: 2000
            }
        },
        watch: {
            order(newVal, oldVal) {
                console.log(newVal)
                this.personID = newVal.order.personID;
                this.time = newVal.order.time;

            }
        },
        methods: {
            ...mapActions(['addOrderAction', 'updateOrderAction', 'getOrderById']),
            save() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                } else {
                    const order = {
                        orderID: this.orderID,
                        time: this.time,
                        personID: this.personID
                    };
                    if (this.orderID) {
                        this.updateOrderAction(order)
                        this.text = 'Название!'
                        this.snackbar = true
                        setTimeout(() => this.$router.go(-1), 2000)
                    } else {
                        this.addOrderAction(order)
                        this.text = 'Заказ создан!'
                        this.snackbar = true
                        setTimeout(() => this.$router.go(-1), 2000)
                    }
                    this.orderID = '';
                    this.order = '';

                    this.$v.$reset()
                }
            },
        },
        computed: {

            timeError() {
                const errors = []
                if (!this.$v.time.$dirty) return errors
                !this.$v.time.required && errors.push('Введите время')
                return errors
            },
            personError() {
                const errors = []
                if (!this.$v.personID.$dirty) return errors
                !this.$v.personID.required && errors.push('Введите id person')
                !this.$v.personID.numeric && errors.push('Только цифровое значение!')
                return errors
            },

        }
    }
</script>

<style scoped>
</style>