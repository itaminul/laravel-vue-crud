require('./bootstrap');
import Vue from 'vue'

window.Vue = require('vue');

import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter)
import axios from 'axios'
Vue.prototype.axios = axios;

import vueResource from 'vue-resource'
Vue.use(vueResource)




const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});