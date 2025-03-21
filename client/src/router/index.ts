import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { authMiddleware } from '@/router/authMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

authMiddleware(router)

export default router
