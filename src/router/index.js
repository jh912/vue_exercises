import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Layout from '../views/Layout.vue'
import Container from '../views/Container.vue'
import LunBo from '../views/LunBo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/container',
    name: 'Container',
    component: Container
  },
  {
    path: '/lunbo',
    name: 'LunBo',
    component: LunBo
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
