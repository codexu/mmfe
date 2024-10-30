import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '../layouts/BasicLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apps',
      redirect: '/vue2',
      component: BasicLayout,
      children: [
        {
          path: '/vue2',
          name: 'Vue2',
          component: () => import('../pages/Vue2.vue')
        },
        {
          path: '/vue3',
          name: 'Vue3',
          component: () => import('../pages/Vue3.vue')
        },
        {
          path: '/react',
          name: 'React',
          component: () => import('../pages/React.vue')
        },
        {
          path: '/next',
          name: 'Next',
          component: () => import('../pages/Next.vue')
        },
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router