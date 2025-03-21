import { useToast } from 'vue-toastification'
import type { Router } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { AuthService } from '@/services/AuthService'

export const authMiddleware = (router: Router) => {
  router.beforeEach(async (to) => {
    const userStore = useUserStore()

    if (!userStore.isAuthenticated && to.meta.public !== true) {
      return { name: 'login' }
    }

    if (userStore.isAuthenticated && !userStore.user) {
      try {
        await AuthService.loadUserData()
      } catch {
        userStore.clearUserData()
        useToast().warning('Nie udało się załadować danych użytkownika')
        return { name: 'login' }
      }
      return to
    }
  })
}
