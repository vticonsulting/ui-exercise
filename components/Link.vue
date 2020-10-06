<template>
  <NuxtLink
    :to="link"
    class="flex items-center w-full px-2 py-2 text-gray-900 capitalize transition duration-150 ease-in-out rounded-md nav-link hover:bg-gray-200 focus:outline-none focus:bg-gray-50"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'Link',
  props: {
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>
