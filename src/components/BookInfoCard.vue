<template>
    <v-card
        class="pa-2"
        raised
        
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="5"
            >
                <v-card>
                    <img :src="this.bookData['photo']"  width="100%" />
                </v-card>
            </v-col>
            <v-col
                cols="6"
                md="7"
                class="pa-4"
            >
                <div class="headline">{{this.book['name']}}</div>
                <v-divider class="my-4" light></v-divider>
                <div class="subtitle-1">{{this.bookData['description']}}</div>
                
                <v-row>
                    <v-col
                        cols="12"
                        md=3
                    >
                        <div class="title font-weight-bold pa-4 text-right">Author:</div>
                        <div class="title font-weight-bold pa-4 text-right">Edition:</div>
                        <div class="title font-weight-bold pa-4 text-right">Price:</div>
                        <div class="title font-weight-bold pa-4 text-right">Isbn:</div>
                    </v-col>

                    <v-col
                        cols="12"
                        md=8
                    >
                        <div class="title font-weight-medium pa-4 text-left">{{this.book['author']}}</div>
                        <div class="title font-weight-medium pa-4 text-left">{{this.book['edition']}}</div>
                        <div class="title font-weight-medium pa-4 text-left">{{this.book['value']}}</div>
                        <div class="title font-weight-medium pa-4 text-left">{{this.book['isbn']}}</div>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    name: "BookInfoCard",
    props: ["bookData"],
    data() {
        return {
            book: null,
        }
    },
    mounted() {
        axios.get("http://0.0.0.0:5000/api/book/" + this.bookData['book_id']).then((response) => {
            this.book = response.data;
            console.log(book);
        });
    }
}
</script>