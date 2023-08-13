import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios' 
//import store from './store'


Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
