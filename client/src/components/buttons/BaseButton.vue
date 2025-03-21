<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'

defineProps<{
  loading?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="flex w-full justify-center rounded-md cursor-pointer bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    :class="{ 'opacity-60': loading }"
    :disabled="disabled || loading"
  >
    <slot v-if="!loading" />
    <LoaderCircle
      v-if="loading"
      class="animate-spin"
    />
  </button>
</template>
