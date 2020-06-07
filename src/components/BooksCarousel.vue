<template>
    <v-carousel 
        :hide-delimiters="true"
        height="400px"
        class="top-down fade"
        :show-arrows-on-hover="true"
        :cycle="false"
    >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
        >
            <v-container class="fluid" >
                <v-row>
                    <v-col
                        v-for="n in 4"
                        :key="n"
                        cols="16"
                        sm="3"
                    >
                        <BookCard />
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>
    </v-carousel>
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
            console.log(response.data);
            
        })
        .catch((error) => {
            console.log(error)
        })
    },
    data () {
        return {
            items: [
                1,
                2,
                3,
            ]
        }
    },
}
</script>