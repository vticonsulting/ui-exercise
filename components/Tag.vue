<template>
  <span :class="[tag, 'p-1 mr-1 text-xs capitalize bg-gray-300 rounded']">
    {{ tag }}
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
}
</script>
