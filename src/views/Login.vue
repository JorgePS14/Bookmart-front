<template>
    <v-form>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h1>Login</h1>
                    <v-form ref="form" >
                        <v-text-field v-model="email"
                            label="Email"
                            outlined
                        ></v-text-field>
                        <v-text-field 
                            v-model="password"
                            label="Password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show ? 'text' : 'password'"
                            name="input-10-1"
                            hint="At least 8 characters"
                            counter
                            @click:append="show = !show"
                            outlined
                        ></v-text-field>
                        <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>



<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: "",
            password: "",
            show: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
        }
    },
    methods: {
        submit: function (event) {
            var account = {
                "email": this.email,
                "password": this.password,
            };

            console.log(account);
        }
    }
}
</script>