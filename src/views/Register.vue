<template>
    <v-form>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h1 >Register</h1>
                    <v-form 
                        ref="form">
                        <v-text-field v-model="username"
                            label="Username"
                            outlined
                        ></v-text-field>
                        <v-text-field 
                            v-model="password"
                            label="Password"
                            :rules="[rules.required, rules.min]"
                            :type="'password'"
                            name="input-10-1"
                            hint="At least 8 characters"
                            counter
                            @click:append="show = !show"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="email"
                            label="Email"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="location"
                            label="Location"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="university"
                            label="University"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="semester"
                            label="Semester"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="major"
                            label="Major"
                            outlined
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
            username: "",
            password: "",
            email: "",
            location: "",
            semester: "",
            university: "",
            major: "",
            show: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            }
        }
    },
    methods: {
        submit: function (event) {
            var user = {
                "username": this.username,
                "email": this.email,
                "password": this.password,
                "location": this.location,
                "university": this.university,
                "semester": this.semester,
                "major" : this.major,
            };
            console.log(user);

            this.$store.dispatch('register', user)
            .then(() => {
                this.$router.push('/')
                this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'Registration',
                    text: 'Hello new user! Your registration is completed.'
                });
            })
            .catch(err => {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Registration',
                    text: 'There was an error with your registration, please try again.'
                });
                console.log(err)
            })
        }
    }
}
</script>