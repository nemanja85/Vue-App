import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formulate from '../views/VueFormulate.vue'
import FormGenerator from  '../views/VueFormGenerator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Formulate',
    component: Formulate
  },
  {
    path: '/formgenerator',
    name: 'FormGenerator',
    component: FormGenerator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
