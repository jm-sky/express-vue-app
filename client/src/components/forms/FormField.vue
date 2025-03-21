<script setup lang="ts">
defineProps<{
  label: string
  id: string
}>()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <label
        :for="id"
        class="block text-sm/6 font-medium text-gray-900"
      >
        {{ label }}
      </label>
    </div>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>
