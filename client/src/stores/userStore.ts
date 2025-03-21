import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { User } from '@/types/user.type'
import { config } from '@/config'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>()
  const token = useLocalStorage<string | null>(`${config.appId}:token`, null)

  const isAuthenticated = computed(() => !!token.value)

  const setToken = (newToken: string) => token.value = newToken
  const clearToken = () => token.value = null

  const setUser = (userData: User) => user.value = userData
  const clearUserData = () => {
    clearToken()
    user.value = undefined
  }

  return {
    user,
    isAuthenticated,
    setToken,
    clearToken,
    setUser,
    clearUserData,
  }
})
