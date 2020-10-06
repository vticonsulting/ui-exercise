<template>
  <div class="flex items-center h-10 space-x-2 text-2xl text-gray-500">
    <input
      class="w-5 h-5 text-gray-500 form-checkbox"
      type="checkbox"
      @click="checkAll()"
      v-model="isCheckAll"
    />

    <button v-if="[checked.length ? 'hidden' : 'flex']" type="button" title="Refresh">
      <SvgIcon icon="refresh" />
    </button>

    <div v-show="checked.length" class="flex items-center space-x-2">
      <button type="button">
        <SvgIcon icon="package-down" />
      </button>

      <button type="button">
        <SvgIcon icon="alert-octagon" />
      </button>

      <button title="Delete">
        <SvgIcon icon="delete" />
      </button>

      <button type="button">
        <SvgIcon icon="email-mark-as-unread" />
      </button>

      <button type="button">
        <SvgIcon icon="clock" />
      </button>
    </div>

    <button type="button">
      <SvgIcon icon="dots-vertical" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isCheckAll: false,
    checked: [],
  }),
  methods: {
    checkAll() {
      this.isCheckAll = !this.isCheckAll
      this.checked = []
      if (this.isCheckAll) {
        for (const key in this.messages) {
          this.checked.push(this.messages[key])
        }
      }
      this.$emit('checked-all', this.isCheckAll)
    },
    updateCheckAll() {
      if (this.checked.length === this.messages.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    },
  },
}
</script>
