import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Product_info from '../views/Product_info.vue'
import Order_history from '../views/Order_history.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order_history',
    name: 'Order_history',
    component: Order_history
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/product_info/:id',
    name: 'Product_info',
    component: Product_info
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router