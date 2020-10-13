import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'

import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormulate, VueFormGenerator)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
