<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    type="button"
    class="cursor-pointer opacity-60 hover:opacity-100"
    @click="toggleDark()"
  >
    <Moon v-if="isDark" />
    <Sun v-else />
  </button>
</template>
