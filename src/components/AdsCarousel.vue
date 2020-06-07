<template>
    <v-carousel
        cycle
        height="500px"
        :hide-delimiters="true"
        :show-arrows="false"
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
        <v-sheet
            color="white"
            height="120%"
        >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
                <div style="width: 100%">
                    <img  v-bind:src="getImgUrl(slide)" style="width: 100%" />
                </div>
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: 'AdsCarousel',
    methods: {
        getImgUrl(img) {
            var images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + img + ".jpg")
        }
    },
    data () {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'adcar1',
                'adcar2',
                'adcar3',
                'adcar4',
                'adcar5',
            ],
        }
    },
}
</script>