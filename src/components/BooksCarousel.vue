<template>
<v-app>
    <v-carousel 
        :hide-delimiters="true"
        height="350px"
        class="top-down fade"
        :show-arrows-on-hover="true"
        :show-arrows="true"
        :cycle="false"
    >
        <v-carousel-item
            v-for="i in Math.ceil(books.length / 4)"
            :key="i"
        >
            <v-container class="fluid" >
                <v-row>
                    <v-col
                        v-for="j in 4"
                        :key="j"
                        cols="16"
                        sm="3"
                    >
                        <BookCard :bookData="books[j + ((i - 1) * 4) - 1]" />
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</v-app>
</template>

<script>
import './BooksCarousel.css'
import BookCard from './BookCard'
import axios from 'axios'

export default {
    name: 'BooksCarousel',
    components: {
        'BookCard': BookCard,
    },
    mounted: function () {
        const path = "http://0.0.0.0:5000/api/listing"
        axios.get(path).then((response) => {
            for (var i in response.data) {
                var book = response.data[i];
                book['photo'] = book['photo'].substring(2, book['photo'].length - 1);
                this.books.push(book);
                console.log(this.books[i]['photo'])
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },
    data () {
        return {
            books:[],
            items: [
                1,
                2,
                3,
            ]
        }
    },
}
</script>