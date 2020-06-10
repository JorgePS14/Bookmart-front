<template>
    <v-row justify="center">
        <v-col
            cols="12"
            md="8"
        >
            <BookInfoCard :bookData="this.$route.params.bookListing" />
        </v-col>
        <v-col
            cols="6"
            md="3"
        >
            <UserInfoCard :bookData="this.$route.params.bookListing" />
        </v-col>
    </v-row>
</template>

<script>
import BookInfoCard from '../components/BookInfoCard';
import UserInfoCard from '../components/UserInfoCard'

export default {
    components: {
        'BookInfoCard': BookInfoCard,
        "UserInfoCard": UserInfoCard,
    },
    data() {
        return {
            bookData: null
        }
    },
    mounted() {
        console.log(this.$route.params.bookListing['user_id']);
        this.bookData = this.$route.params.bookListing;
    }
}
</script>