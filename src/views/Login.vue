<template>
  <v-container fluid id="app" class='bg'>
  <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
        style="height: 300px;"
    >
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          offset=4
            center
            label="Solo"
            placeholder="Title or ISBN"
            solo
          ></v-text-field>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.bg {
    background-color: white;
    // background-image: url('../assets/books.jpg');
    width: 100 vw;
    height: 2000 vh;
}
</style> 