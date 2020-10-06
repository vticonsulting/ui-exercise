<template>
  <Portal to="modals" v-if="show">
    <div class="z-10 modal-backdrop" v-show="show">
      <div class="modal">
        <slot />
      </div>
    </div>
  </Portal>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: ['show'],
  methods: {
    dismiss() {
      this.$emit('close')
    },
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss()
      }
    }
    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
}
</script>
