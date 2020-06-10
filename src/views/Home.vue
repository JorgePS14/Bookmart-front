<template>
    <div>
        <AdsCarousel />
        <BooksCarousel style="margin-top: -400px"/>
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