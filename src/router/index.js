import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import filter from '@/components/Filter.vue'
import cart from '../pages/Cart.vue'
import addProductForm from '../pages/AddProductForm.vue'
import updateProductForm from '../pages/UpdateProductForm.vue'

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
    },
    {
      path: "/add/product",
      name: "add-product",
      component: addProductForm
    },
    {
      path: "/update/product",
      name: "update-product",
      component: updateProductForm
    }
  ]
})

export default router
