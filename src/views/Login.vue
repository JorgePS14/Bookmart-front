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
                        <v-text-field v-model="password"
                            label="Password"
                            outlined
                            :type="'password'"
                        ></v-text-field>
                        <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <notifications group="foo" />
    </v-form>
</template>



<script>
import http from '../services/http';

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        submit: function () {
            let account = {
                "email": this.email,
                "password": this.password,
            };
            this.$store.dispatch('login', account)
            .then(() => {
                this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'Login',
                    text: 'You successfully logged in!'
                });
                this.$router.push({ path: '/'});
            })
            .catch(err => {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Login',
                    text: 'Failed to login!'
                });
                console.log(err)
            })
        }
    }
}
</script>
