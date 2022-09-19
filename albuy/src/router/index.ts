import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import "../style.css"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //Customer
  {
    path: '/c-index',
    name: 'c-index',
    component: () => import(/* webpackChunkName: "about" */ '../views/customer/c-index.vue'),
  },
  {
    path: '/c-product',
    name: 'c-product',
    component: () => import(/* webpackChunkName: "about" */ '../views/customer/c-product.vue'),
  },

  //Seller
  {
    path: '/s-add-new-product',
    name: 's-add-new-product',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-add-new-product-responsive.vue'),
  },
  {
    path: '/s-sign-in',
    name: 's-sign-in',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-sign-in.vue'),
  },
  {
    path: '/s-create-shop-acc',
    name: 's-create-shop-acc',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-create-shop-acc-phone-num.vue'),
  },
  {
    path: '/s-create-shop-acc-ver2',
    name: 's-create-shop-acc-ver2',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-create-shop-acc-ver2.vue'),
  },
  {
    path: '/s-create-shop-acc-ver3',
    name: 's-create-shop-acc-ver3',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-create-shop-acc-ver3.vue'),
  },
  {
    path: '/s-product-all',
    name: 's-product-all',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller/s-product-all.vue'),
  },

  //Tests
  {
    path: '/AdminTest',
    name: 'AdminTest',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/AdminTest.vue'),
  },
  {
    path: '/ProductPageTest',
    name: 'ProductPageTest',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/ProductPageTest.vue'),
  },
  {
    path: '/RedirectPage',
    name: 'RedirectPage',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/RedirectPage.vue'),
  },
  {
    path: '/SignUpTest',
    name: 'SignUpTest',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/SignUpTest.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
