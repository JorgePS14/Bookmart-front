import store from './services/store'
import Axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'

Vue.prototype.$http = Axios;

const token = localStorage.getItem('user-token')

if(token) {
  Vue.prototype.$http.defaults.headers.common['Autorization'] = token
}


Vue.use(Notifications)

new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
});
