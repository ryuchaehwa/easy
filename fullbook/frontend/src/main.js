import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import routes from './routes'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  routes
}).$mount('#app')
