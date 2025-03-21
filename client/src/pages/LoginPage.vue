<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import GuestLayout from '@/layouts/GuestLayout.vue'
import { api } from '@/helpers/api'
import { useUserStore } from '@/stores/userStore'
import TextInput from '@/components/inputs/TextInput.vue'
import FormField from '@/components/forms/FormField.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'

const toast = useToast()
const router = useRouter()
const userStore = useUserStore()

const { isSubmitting, setErrors, handleSubmit, defineField } = useForm({
  initialValues: {
    email: 'jan.madeyski@sklodowscy.pl',
    password: 'Secret123!',
  }
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  try {
    await api.get<string>('/api/users')
    const token = (await api.post<string>('/api/auth/login', { ...values })).data
    userStore.setToken(token)
    await router.push('/')
  } catch {
    setErrors({
      email: 'Invalid credentials',
      password: 'Invalid credentials',
    })
    toast.error('Could not login')
  }
})
</script>

<template>
  <GuestLayout>
    <form
      class="space-y-6"
      :class="{ 'opacity-60': isSubmitting }"
      @submit="onSubmit"
    >
      <FormField
        id="email"
        label="Email address"
      >
        <TextInput
          id="email"
          v-model="email"
          v-bind="emailAttrs"
          type="email"
          autocomplete="email"
        />
      </FormField>

      <FormField
        id="password"
        label="Password"
      >
        <TextInput
          id="password"
          v-model="password"
          v-bind="passwordAttrs"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </FormField>

      <div>
        <BaseButton
          type="submit"
          :loading="isSubmitting"
        >
          Sign in
        </BaseButton>
      </div>
    </form>
  </GuestLayout>
</template>
