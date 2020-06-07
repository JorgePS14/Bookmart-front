<template>
    <v-card
        class="mx-auto"
        min-height="300px"
        style="background-color: white"
    >
        <v-img
            class="white--text align-end"
            height="140px"
            background-color="white"
            :src="img"
        >
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
            <h4>{{bookData['description']}}</h4>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="orange"
            text
        >
            Share
        </v-btn>

        <v-btn
            color="orange"
            text
        >
            Explore
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'BookCard',
    props: ['bookData'],
    data() {
        return {
            img: "../assets/books-default.jpg"
        }
    },
    mounted() {
        console.log(this.img)
        this.img = this.bookData['photo']
    }
}
</script>