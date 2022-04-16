import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routerHistory = createWebHashHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'introduction',
          name: 'introduction',
          component: () => import('@/components/Introduction.vue'),
        },
        {
          path: 'theory',
          name: 'theory',
          component: () => import('@/components/Theory.vue'),
        },
        {
          path: 'operate',
          name: 'operate',
          component: () => import('@/components/Operate.vue'),
        },
      ],
    },
  ],
})

export default router
