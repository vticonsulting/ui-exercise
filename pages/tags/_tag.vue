<template>
  <MessageList :messages="messages" />
</template>

<script>
import {init} from '@/shared'

export default {
  name: 'TagPage',
  fetch: init,
  computed: {
    messages() {
      return this.$store.getters.getMessagesByTag(this.$route.params.tag)
    },
  },
}
</script>
