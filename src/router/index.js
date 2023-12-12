import { createRouter, createWebHistory } from 'vue-router'
import { app, pages } from '@/config'
import HomePage from '@/pages/HomePage.vue'

const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: pages.home,
      name: app.home,
      component: HomePage
    },
    {
      path: pages.about,
      name: app.about,
      component: AboutPage
    }
  ]
})

export default router
