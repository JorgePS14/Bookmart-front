<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        color="white"
    >
        <v-img
        height="100"
        :src="img"
        ></v-img>

        <div class="my-2 subtitle-1 ellipsis" style="color: black">{{bookData['description']}}</div>
        <v-card-text style="margin-top: -24px">
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                    :value="rating"
                    color="amber"
                    background-color="amber lighten-3"
                    dense
                    half-increments
                    readonly
                    size="17"
                ></v-rating>

                <div class="grey--text ml-2">{{rating}} ({{Math.floor(Math.random() * 1000)}})</div>
            </v-row>
        </v-card-text>
        <v-divider class="mx-4" light></v-divider>
        <v-card-subtitle class="mx-1 text-md-center title" style="color: black">• ${{bookData['price']}} • </v-card-subtitle>
    </v-card>
</template>

<script>
import '../styles/BookCard.css'

export default {
    name: 'BookCard',
    props: ['bookData', 'rating'],
    data() {
        return {
            img: "../assets/books-default.jpg",
            ratings: [3.0, 3.5, 4.0, 4.5, 5.0],
        }
    },
    mounted() {
        console.log(this.img)
        this.img = this.bookData['photo']
    }
}
</script>