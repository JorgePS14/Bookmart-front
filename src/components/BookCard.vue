<template>
    <v-hover
        v-slot:default="{ hover }"
    >
    <v-card
        :elevation="hover ? 16 : 2"
        class="mx-auto"
        color="white"
    >
        <v-img
            height="140"
            :src="img"
        ></v-img>

        <div class="my-2 subtitle-1 ellipsis" style="color: black">{{book['name']}}</div>
        <v-card-text style="margin-top: -24px">
            <v-row
                align="center"
                justify="center"
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

                <div class="grey--text ml-2">{{rating}} ({{numOfRates}})</div>
            </v-row>
        </v-card-text>
        <v-divider class="mx-4" light></v-divider>
        <v-card-subtitle class="mx-1 text-md-center title" style="color: black">• ${{bookData['price']}} • </v-card-subtitle>
    </v-card>
    </v-hover>
</template>

<script>
import '../styles/BookCard.css'
import axios from 'axios';

export default {
    name: 'BookCard',
    props: ['bookData', 'rating', 'numOfRates'],
    data() {
        return {
            img: "../assets/books-default.jpg",
            ratings: [3.0, 3.5, 4.0, 4.5, 5.0],
            book: null,
        }
    },
    mounted() {
        this.img = this.bookData['photo']
        
        axios.get("http://0.0.0.0:5000/api/book/" + this.bookData['book_id']).then((response) => {
            this.book = response.data;
        });
    }
}
</script>