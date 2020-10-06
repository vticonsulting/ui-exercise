<template>
  <button type="button" @click="modalOpen = true">
    <slot />
    <MessageDeleteConfirmModal
      :show="modalOpen"
      @close="modalOpen = false"
      :message-id="messageId"
    />
  </button>
</template>

<script>
export default {
  name: 'MessageDeleteButton',
  props: ['messageId'],
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>
