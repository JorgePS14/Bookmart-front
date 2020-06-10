<template>
    <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
                <v-btn v-on:click="greet" >Normal</v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        greet: function () {
            console.log(this.$route.params.bookListing);
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        
    }
}
</script>