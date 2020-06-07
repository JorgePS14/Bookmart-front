import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/Register'
import Book from '../views/Book'
import Home from '../views/Home'
import Listing from '../views/Listing'
import BookListing from '../views/BookListing'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/book',
            name: 'Book',
            component: Book
        },
        {
            path: '/listing',
            name: 'Listing',
            component: Listing
        },
        {
            path: '/listing-get',
            name: 'BookListing',
            component: BookListing
        }
    ]
});