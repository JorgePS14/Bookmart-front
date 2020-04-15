<template>
    <v-form>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h1 >Register</h1>
                    <v-form ref="form" >
                        <v-text-field v-model="username"
                            label="Username"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="password"
                            label="Password"
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
    </v-form>
</template>



<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: "",
            password: "",
            email: "",
            location: "",
            semester: "",
            university: "",
            major: ""
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

           const path = "http://localhost:8000/api/user"
            axios.post(path, user).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>