<template>
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
                                v-model="name"
                                :error-messages="nameError"
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
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
</template>

<script>
    import {mapActions} from 'vuex'
    import {validationMixin} from 'vuelidate'
    import {required, numeric} from 'vuelidate/lib/validators'
    export default {
        name: "ProductForm",
        props: ['product'],
        mixins: [validationMixin],
        validations: {

            name: {required}

        },
        data() {
            return {

                name: '',

                snackbar: false,
                text: '',
                timeout: 2000
            }
        },
        watch: {
            product(newVal, oldVal) {
                console.log(newVal)

                this.name = newVal.product.name;

            }
        },
        methods: {
            ...mapActions(['addProductAction', 'updateProductAction', 'getProductById']),
            save() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                } else {
                    const product = {
                        productID: this.productID,
                        name: this.name
                    };
                    if (this.productID) {
                        this.updateProductAction(product)
                        this.text = 'Название!'
                        this.snackbar = true
                        setTimeout(() => this.$router.go(-1), 2000)
                    } else {
                        this.addProductAction(product)
                        this.text = 'Продукт добавлен!'
                        this.snackbar = true
                        setTimeout(() => this.$router.go(-1), 2000)
                    }
                    this.productID = '';
                    this.product = '';

                    this.$v.$reset()
                }
            },
        },
        computed: {

            nameError() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Введите название')
                return errors
            },

        }
    }
</script>

<style scoped>
</style>