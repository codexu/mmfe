import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '../layouts/BasicLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: BasicLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/HomeView.vue')
        }
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router