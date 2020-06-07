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
                        <v-text-field v-model="price"
                            label="Price"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="user_id"
                            label="User ID"
                            outlined
                        ></v-text-field>
                        <v-text-field v-model="book_id"
                            label="Book ID"
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
export default {
    data() {
        return {
            description: "",
            condition: "",
            no_available: "",
            price: "",
            user_id: "",
            book_id: "",
        }
    },
    methods: {
        submit: function (event) {
            var book = {
                description: this.description,
                condition: this.condition,
                no_available: this.no_available,
                price: this.price,
                user_id: this.user_id,
                book_id: this.book_id,
            };

            const path = "http://0.0.0.0:5000/api/listing"
            axios.post(path, book).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

"""
CREATE TABLE `listing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` longblob NOT NULL,
  `description` varchar(200) NOT NULL,
  `condition` int NOT NULL,
  `no_available` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `user_id` int NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `listing_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `listing_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
"""