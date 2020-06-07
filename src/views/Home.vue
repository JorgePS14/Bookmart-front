<template>
    <div v-if="isLoggedIn">
        <h1>welcome {{ user }}</h1>
    </div>
</template>

<script>
export default {
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