<template>
    <v-item-group multiple>
        <v-container>
            <v-row>
                <v-col
                    v-for="n in this.books.length"
                    :key="n"
                    cols="12"
                    md="3"
                >
                <BookCard
                        @click.native="onCardSelected(books[n - 1])"
                        :bookData="books[n - 1]"
                        :rating="ratings[Math.floor(Math.random() * ratings.length)]"
                        :numOfRates="Math.floor(Math.random() * 1000)"
                    ></BookCard>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>


<script>
import axios from 'axios';
import router from '../router'
import BookCard from '../components/BookCard'

export default {
    components: {
        'BookCard': BookCard
    },
    methods: {
        onCardSelected: function (bookData) {
            router.push({ name: 'BookData', params: { bookListing: bookData } })
        }

    },
    mounted: function () {
        this.text = this.$route.params.text;

        const path = "http://0.0.0.0:5000/api/listing"
        axios.get(path).then((response) => {
            for (var i in response.data) {
                var book = response.data[i];
                book['photo'] = book['photo'].substring(2, book['photo'].length - 1);
                this.books.push(response.data[i]);
            }
        });

    },
    data () {
        return {
            books:[],
            showBooks: [],
            text: null,
            ratings: [3.0, 3.5, 4.0, 4.5, 5.0],
        }
    },
}
</script>