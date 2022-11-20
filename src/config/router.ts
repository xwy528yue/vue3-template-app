import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import example from '../views/example/config/routes'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/example/home' },
  example,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
