<template>
    <div>
        <AdsCarousel />
        <BooksCarousel style="margin-top: -300px"/>
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
    }
}
</script>