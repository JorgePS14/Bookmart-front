<template>
  <v-app-bar
    app
    dark
    color="#151e29"
    >
    <v-img class="mx-2" src="../src/assets/logo.png" max-height="30" max-width="30" contain></v-img>
    <router-link to="/" class="router-link">
      <v-toolbar-title class="_title" style="{textDecoration: None}">
        <span class="lightgray">Book</span>Mart
      </v-toolbar-title>
    </router-link>
    <v-text-field
      @keydown.enter="search"
      v-model="select"
      dense
      flat
      class="mx-4"
      solo-inverted
      label="Title or ISBN"
      hide-details
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Sell</v-btn>
      <v-btn v-if='!isLoggedIn' text to="/login">Log in</v-btn>
      <v-btn v-if='!isLoggedIn' text to="/register">Register</v-btn>
      <v-btn v-if='isLoggedIn' text v-on:click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import router from '../router'

export default {
  data () {
    return {
        select: null,
    }
  },
  methods: {
    logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    },
    search: function(event) {
      router.push({ name: 'BookListing', params: { text: this.select, books: this.books } })
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.router-link{
  text-decoration: none;
}

.lightgray {
  color: lightgray !important;
}

.navbar {
  background-color: $primary-color !important;
}

._title {
  color: white;

  strong {
    color: lightgray;
  }
}
</style>