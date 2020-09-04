import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//slide


Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

//luu thong tin dang nhap
store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})