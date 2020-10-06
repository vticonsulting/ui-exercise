<template>
  <BTable class="hidden mt-8 sm:block" :data="taggedMessages" :columns="columns" />
</template>

<script>
import {defineComponent, useContext, computed} from '@nuxtjs/composition-api'
import useMessages from '@/composables/useMessages'

export default defineComponent({
  name: 'TagPage',
  setup() {
    const {messages} = useMessages()
    const {route} = useContext()

    const taggedMessages = computed(function () {
      return messages.value.filter(message => message.tags.includes(route.value.params.tag))
    })

    return {
      taggedMessages,
    }
  },
  data: () => ({
    columns: [
      {
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true,
      },
      {
        field: 'sender',
        label: 'Sender',
      },
      {
        field: 'subject',
        label: 'Subject',
      },
      {
        field: 'body',
        label: 'Body',
        centered: true,
      },
      {
        field: 'date',
        label: 'Date',
        centered: true,
      },
    ],
  }),
})
</script>
