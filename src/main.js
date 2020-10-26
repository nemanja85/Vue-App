import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'
import firebase from "firebase"

Vue.use(VueFormulate)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKX7g8KuSpbc_rklZ51bxMB_p0z9I6S-Q",
  authDomain: "my-project-4acfb.firebaseapp.com",
  databaseURL: "https://my-project-4acfb.firebaseio.com",
  projectId: "my-project-4acfb",
  storageBucket: "my-project-4acfb.appspot.com",
  messagingSenderId: "329852580096",
  appId: "1:329852580096:web:8fde6453ebb490e97dc3e5",
  measurementId: "G-XMWJSNV8EX"
};
//Initialize firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
