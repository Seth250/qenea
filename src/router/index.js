import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
