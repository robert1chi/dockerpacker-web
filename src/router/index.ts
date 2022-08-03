import { useRoute, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const defaultRoute: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'home',
    component: () => import('./views/home/index.vue')
},
{ path: '/login', name: 'login', component: () => import('./views/login/index.vue') }]