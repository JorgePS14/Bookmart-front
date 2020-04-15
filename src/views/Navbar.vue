<template>
  <v-app-bar
    app
    dark
    color="indigo darken-4"
    >
    <v-img class="mx-2" src="../src/assets/logo.png" max-height="30" max-width="30" contain></v-img>
    <router-link to="/" class="router-link">
      <v-toolbar-title class="_title" style="{textDecoration: None}">
        <span class="lightgray">Book</span>Mart
      </v-toolbar-title>
    </router-link>
    <v-text-field
      v-model="select"
      flat
      class="mx-4"
      solo-inverted
      label="Title or ISBN"
      hide-details
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Buy</v-btn>
      <v-btn text>Sell</v-btn>
      <v-btn text to="/register">Log In | Register</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
        select: null
    }
  },
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