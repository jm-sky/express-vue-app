import type { User } from '@/types/user.type'
import { api } from '@/helpers/api'
import { useUserStore } from '@/stores/userStore'

type Credentials = {
  email: string
  password: string
  remember: boolean
}

export class AuthService {
  static async login(payload: Credentials) {
    const userStore = useUserStore()
    const token = (await api.post<string>('/api/auth/login', payload)).data
    userStore.setToken(token)
  }

  static async logout() {
    const userStore = useUserStore()
    await api.post<string>('/api/auth/logout')
    userStore.clearUserData()
  }

  static async loadUserData() {
    const userStore = useUserStore()
    const user = (await api.get<User>('/api/user')).data
    userStore.setUser(user)
  }
}
