<template>
    <div>
        <AdsCarousel style="margin-top:-12px" />
        <BooksCarousel style="margin-top: -400px"/>
    <div v-if="isLoggedIn">
        <h1>welcome {{ user }}</h1>
    </div>
    </div>
</template>

<script>
import AdsCarousel from '../components/AdsCarousel'
import BooksCarousel from '../components/BooksCarousel'
export default {
    name: 'Home', 
    components: {
        'AdsCarousel': AdsCarousel,
        'BooksCarousel': BooksCarousel
    },
    data() {
        return {
        }
    },
    computed: {
        isLoggedIn: function(){
            return this.$store.getters.isLoggedIn
        },
        user: function () {
            return this.$store.state.user.username;
        }
    }
}
</script>