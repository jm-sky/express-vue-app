<script setup lang="ts">
import MobileMenu from './MobileMenu.vue'
import MobileMenuButton from './MobileMenuButton.vue'
import NotificationsButton from './NotificationsButton.vue'
import ProfileDropdown from './ProfileDropdown.vue'

</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="shrink-0">
            <img
              class="size-8"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=sky&shade=500"
              alt="Your Company"
            >
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <RouterLink
                to="/"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </RouterLink>
              <RouterLink
                to="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </RouterLink>
              <RouterLink
                to="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <NotificationsButton />

            <!-- Profile dropdown -->
            <ProfileDropdown />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <MobileMenuButton />
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <MobileMenu />
  </nav>
</template>
