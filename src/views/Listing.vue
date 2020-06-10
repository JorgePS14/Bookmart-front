<template>
    <v-form>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h1 >Listing</h1>
                    <v-form ref="form" >
                        <v-text-field v-model="description"
                            label="Description"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="condition"
                            label="Condition"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="no_available"
                            label="# Available"
                            outlined
                        ></v-text-field>
                        <template>
                            <v-file-input v-model="img" show-size label="File input" outlined></v-file-input>
                        </template>
                        <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            description: "",
            condition: "",
            no_available: "",
            price: "",
            user_id: "",
            book_id: "",
            img: "",
        }
    },
    methods: {
        submit: function (event) {
            var book = {
                description: this.description,
                condition: this.condition,
                no_available: this.no_available,
                price: this.price,
                user_id: 1,
                book_id: this.book_id,
                img: this.img,
            };


            var listingFormData = new FormData();
            listingFormData.append('photo', this.img);
            listingFormData.append('description', this.description);
            listingFormData.append('condition', parseInt(this.condition));
            listingFormData.append('no_available', parseInt(this.no_available));
            listingFormData.append('price', parseInt(this.price));
            listingFormData.append('user_id', parseInt(1));
            listingFormData.append('book_id', parseInt(this.book_id));

            axios({
                method: "post",
                url: "http://0.0.0.0:5000/api/listing",
                data: listingFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                console.log(respones);
            });
        }
    },
    mounted: function() {
        this.book_id =  this.$route.params.bookId;
        this.price =  this.$route.params.price;
    }
}
</script>