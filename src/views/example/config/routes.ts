import { RouteRecordRaw } from 'vue-router'
import Main from '../index.vue'

const routes: RouteRecordRaw = {
  path: '/example',
  name: 'example',
  component: Main,
  children: [
    {
      path: '/example/home',
      name: 'exampleHome',
      component: () => import('../pages/exampleHome.vue'),
    },
  ],
}
export default routes
