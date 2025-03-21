<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { useLogout } from '@/composables/useLogout'
import { useUserStore } from '@/stores/userStore'

const { user } = useUserStore()
const { logout } = useLogout()

const open = ref(false)
const dropdown = useTemplateRef<HTMLElement>('dropdown')

const {} = onClickOutside(dropdown, () => open.value = false)
</script>

<template>
  <div class="relative ml-3">
    <div>
      <button
        id="user-menu-button"
        type="button"
        class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
        aria-expanded="false"
        aria-haspopup="true"
        @click="open = !open"
      >
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <img
          class="size-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        >
      </button>
    </div>

    <div
      v-if="open"
      ref="dropdown"
      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <div class="px-4 py-2 text-sm border-b border-gray-300 space-y-1">
        <div>{{ user?.name }}</div>
        <div class="text-xs text-gray-400">
          @{{ user?.email }}
        </div>
      </div>
      <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" -->
      <RouterLink
        id="user-menu-item-0"
        to="/user/profile"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
        role="menuitem"
        tabindex="-1"
      >
        Your Profile
      </RouterLink>
      <RouterLink
        id="user-menu-item-1"
        to="/user/settings"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
        role="menuitem"
        tabindex="-1"
      >
        Settings
      </RouterLink>
      <a
        id="user-menu-item-2"
        href="/logout"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
        role="menuitem"
        tabindex="-1"
        @click.stop.prevent="logout()"
      >
        Sign out
      </a>
    </div>
  </div>
</template>
