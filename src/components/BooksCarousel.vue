<template>
<v-app>
    <v-carousel 
        :hide-delimiters="true"
        height="400px"
        class="top-down fade"
        :show-arrows-on-hover="true"
        :show-arrows="true"
        :cycle="false"
    >
        <v-carousel-item
            v-for="i in Math.ceil(books.length / 6)"
            :key="i"
        >
            <v-container class="fluid" >
                <v-row>
                    <v-col
                        v-for="j in 6"
                        :key="j"
                        cols="16"
                        sm="2"
                    >
                        <BookCard
                            @click.native="onCardSelected(books[j + ((i - 1) * 6) - 1])"
                            :bookData="books[j + ((i - 1) * 6) - 1]"
                            :rating="ratings[Math.floor(Math.random() * ratings.length)]"
                            :numOfRates="Math.floor(Math.random() * 1000)"
                        ></BookCard>
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</v-app>
</template>

<script>
import '../styles/BooksCarousel.css'
import BookCard from './BookCard'
import router from '../router'
import axios from 'axios'

export default {
    name: 'BooksCarousel',
    components: {
        'BookCard': BookCard,
    },
    methods: {
        onCardSelected: function (bookData) {
            console.log(bookData['description']);
            router.push('bookData')
        }
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
            ratings: [3.0, 3.5, 4.0, 4.5, 5.0],
        }
    },
}
</script>