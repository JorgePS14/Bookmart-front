<template>
    <v-form>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h1 >Add Book</h1>
                    <v-form ref="form" >
                        <v-text-field v-model="name"
                            label="Name"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="author"
                            label="Author"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="edition"
                            label="Edition"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="value"
                            label="Value"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="isbn"
                            label="ISBN"
                            outlined
                        ></v-text-field>
                        <v-btn v-on:click="submit" color="success" large dark>Submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script>
import axios from 'axios';
import router from '../router'

export default {
    data() {
        return {
            name: "",
            author: "",
            edition: "",
            value: "",
            isbn: "",
        }
    },
    methods: {
        submit: function (event) {
            var book = {
                "name": this.name,
                "author": this.author,
                "edition": this.edition,
                "value": this.value,
                "isbn": this.isbn,
            };

        console.log(book.id, book.img);
        const path = "http://0.0.0.0:5000/api/book"
            axios.post(path, book).then((response) => {
                console.log(response);
                router.push({ name: 'Listing', params: { bookId: response.data.id, price: book.value } })
            })
            .catch((error) => {
                console.log(error)
            })
        } 
    }
}
</script>