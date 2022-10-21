import Vue from 'vue';
import VueRouter from 'vue-router';
import LoadingApp from '../views/LoadingApp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Voucher from '../views/Voucher.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoadingApp',
    component: LoadingApp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/voucher',
    name: 'Voucher',
    component: Voucher
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
