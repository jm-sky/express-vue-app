import { useRouter } from 'vue-router'
import { AuthService } from '@/services/AuthService'

export const useLogout = () => {
  const router = useRouter()

  const logout = async () => {
    await AuthService.logout()
    await router.push('/login')
  }

  return {
    logout,
  }
}
