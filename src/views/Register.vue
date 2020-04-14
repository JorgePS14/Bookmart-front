<template>
    <v-form>
        <h1 >Register</h1>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="username"
                        label="Username"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="password"
                        label="Password"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="email"
                        label="Email"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="location"
                        label="Location"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="university"
                        label="University"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="semester"
                        label="Semester"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="major"
                        label="Major"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6">
                    <div class="text-center">
                        <div class="my-2">
                            <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>



<script>

fetch('/hello')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log('GET response text:');
        console.log(text); // Print the greeting as text
    });

// Send the same request
fetch('/hello')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
    })

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
                "major" : this.major
            };

            var userJSON = JSON.stringify(user);
            console.log(userJSON);


            fetch('/user', {

                // Specify the method
                method: 'POST',

                // A JSON payload
                body: JSON.stringify({
                    "greeting": "Hello from the browser!"
                })
            }).then(function (response) { // At this point, Flask has printed our JSON
                return response.text();
            }).then(function (text) {

                console.log('POST response: ');

                // Should be 'OK' if everything was successful
                console.log(text);
            });


        }
    }
}
</script>