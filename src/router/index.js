import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/Register'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
    ]
});