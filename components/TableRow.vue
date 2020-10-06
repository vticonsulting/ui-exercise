<template>
  <tr>
    <td>
      <slot name="selector" :row-data="rowData" />
    </td>
    <td>
      <slot />
    </td>
    <td>
      <slot name="actions" />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    rowData: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    data: 'This is from the child slot-scope',
  }),
  methods: {
    hello() {
      window.alert('this is from the child')
    },
  },
}
</script>
