import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/Register'
import BookData from '../views/BookData'
import Book from '../views/Book'
import Home from '../views/Home'
import Listing from '../views/Listing'
import BookListing from '../views/BookListing'
import Login from '../views/Login';

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
            path: '/bookData/:bookListing',
            name: 'BookData',
            component: BookData,
            props: true
        },
        {
            path: '/book',
            name: 'Book',
            component: Book
        },
        {
            path: '/listing/:bookId:price',
            name: 'Listing',
            component: Listing,
            props: true
        },
        {
            path: '/bookListing/:text',
            name: 'BookListing',
            component: BookListing,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
});