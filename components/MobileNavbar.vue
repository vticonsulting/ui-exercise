<template>
  <!-- Mobile menu, toggle classes based on menu state. Menu open: "block", Menu closed: "hidden" -->
  <div class="hidden md:hidden">
    <!-- Mobile menu -- RouterLinks -->
    <div class="px-2 pt-2 pb-3 sm:px-3">
      <NuxtLink
        v-for="link in links"
        :key="`${link.label}-mobile-menu-link`"
        :to="link.url"
        class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <!-- Mobile menu -- AuthSection-->
    <div class="pt-4 pb-3 border-t border-gray-700">
      <!-- Mobile menu -- AuthUserAvatarAndInfo -->
      <div class="flex items-center px-5 sm:px-6">
        <!-- Mobile AuthUserAvatar -->
        <div class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <!-- Mobile AuthUserInfo -->
        <div class="ml-3">
          <div class="text-base font-medium leading-6 text-white">Tom Cook</div>
          <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
        </div>
      </div>

      <!-- Mobile menu -- AuthUserLinks (Profile, Settings, Signout)-->
      <div class="px-2 mt-3 sm:px-3">
        <NuxtLink
          to="/profile"
          class="block px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Your Profile
        </NuxtLink>
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Settings
        </a>
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Sign out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileNavbar',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
