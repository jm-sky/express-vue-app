import type { RouteRecordRaw } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import HomePage from '@/pages/HomePage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      protected: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      public: true
    },
    // component: () => import('../views/AboutView.vue'),
  },
]
