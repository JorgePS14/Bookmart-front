<template>
    <v-card
        class="pa-2"
        raised
    >
        <div class="title font-weight-medium text-left">{{this.user['username']}}</div>
        <div class="subtitle-2 font-weight-medium text-left">{{this.user['location']}}, {{this.user['university']}}</div>
        <div class="subtitle-2 font-weight-medium text-left">{{this.user['email']}}</div>
        
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    name: "UserInfoCard",
    props: ["bookData"],
    data() {
        return {
            user: null,
        }
    },
    mounted() {
        axios.get("http://0.0.0.0:5000/api/user/" + this.bookData['user_id']).then((response) => {
            this.user = response.data;
            console.log(this.user);
        });
    }
}
</script>