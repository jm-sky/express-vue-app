<script setup lang="ts">
import DarkModeButton from '@/components/buttons/DarkModeButton.vue'

</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm py-6 px-10 border border-gray-300 rounded-lg shadow-lg">
      <slot />
    </div>

    <div class="text-center mt-5 text-sm">
      <DarkModeButton />
    </div>
  </div>
</template>
