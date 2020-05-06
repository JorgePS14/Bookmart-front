import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/Register';
import Home from '../views/Home';
import Login from '../views/Login';

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
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
});