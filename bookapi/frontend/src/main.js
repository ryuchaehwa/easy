import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuetifyConfirm from 'vuetify-confirm'
import { router } from './routes/index';
import axios from 'axios'
// import VueResource from 'vue-resource'

Vue.use(VuetifyConfirm, {vuetify})

// Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
