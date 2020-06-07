<template>
    <v-carousel 
        hide-delimiters
        class="top-down fade"
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
export default {
    name: 'BooksCarousel',
    components: {
        'BookCard': BookCard,
    },
    data () {
        return {
            items: [
                1,
                2,
                3,
                4
            ]
        }
    },
}
</script>