<template>
  <NuxtLink :key="link.label" :to="localePath(link.url)" :class="classObject">
    {{ link.label }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavbarMenu',
  props: {
    link: {
      type: Object,
      default: () => ({}),
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      const box = 'rounded-md block px-3 py-2 mt-1'
      const typography = 'text-base font-medium'
      const transition = 'transition duration-150 ease-in-out'
      const color = 'text-gray-300 hover:text-white hover:bg-gray-700'
      const focus = 'focus:outline-none focus:text-white focus:bg-gray-700'
      return {
        box,
        typography,
        transition,
        color,
        focus,
      }
    },
  },
}
</script>

<style>
/* active: text-white, bg-gray-900, no hover styles */
</style>
