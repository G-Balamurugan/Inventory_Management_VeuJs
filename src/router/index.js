import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import filter from '@/components/Filter.vue'
import cart from '../pages/Cart.vue'
// import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'

// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "product-list",
      component: ProductList
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    },
    {
      path: "/filter",
      name: "filter",
      component: filter
    }
  ]
})

export default router
