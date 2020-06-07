<template>
    <v-container>
        <v-card
            :elevation="15"
            height="350"
            width="500"
            style="background:#1867c0"
        >

            <v-row align="center" justify="center" >
                <v-col cols="10" sm="9" md="3">
                    <h1 style="color:black">Login</h1>
                
                    <v-form ref="form" width="250px">
                        <v-text-field v-model="username"
                            label="Username"
                            outlined
                            background-color="white"
                        ></v-text-field>
                        <v-text-field v-model="password"
                            label="Password"
                            outlined
                            background-color="white"
                        ></v-text-field>
                        <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>

        </v-card>
    </v-container>
</template>