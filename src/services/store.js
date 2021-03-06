import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      status: '',
      token: localStorage.getItem('user-token') || '',
      user : {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, {token, user}){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')

                console.log(user);
                http.post('/auth', user).then(res => {
                    let token = res.access_token
                    if (!token){
                        throw 500;
                    }
                    http.get('/api/user/' + user.email).then(user => {
                        localStorage.setItem('user-token', token);
                        http.defaults.headers.common['Authorization'] = token
                        commit('auth_success', {token, user});
                        resolve()
                    })
                    .catch(error => {
                        throw error
                    })
                }).catch(error => {
                    commit('auth_error')
                    localStorage.removeItem('user-token');
                    reject(error)
                })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('user-token')
                delete http.defaults.headers.common['Authorization']
                resolve()
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                http.post('/signup', user).then(res => {
                    if (res.status != 200) {
                        throw res.status
                    }
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})