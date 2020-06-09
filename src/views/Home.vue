<template>
    <div>
        <AdsCarousel style="margin-top:-12px" />
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
    }
}
</script>