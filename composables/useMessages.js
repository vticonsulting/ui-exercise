import {useFetch, useContext, watchEffect, ref, computed} from '@nuxtjs/composition-api'
import {strip} from '@/helpers'

export default function useMessages() {
  const {$axios, route} = useContext()
  const messages = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  useFetch(async () => {
    messages.value = await $axios.$get('messages')
  })

  const filteredMessages = computed(() => {
    if (route.value.params.tag) {
      return messages.value.filter(message => message.tags.includes(route.value.params.tag))
    }
    return messages.value
  })

  // const tags = computed(() => messages.values)
  const tags = computed(() =>
    messages.value
      .map(message => message.tags)
      .flat()
      .reduce((obj, tag) => {
        if (!obj[tag]) {
          obj[tag] = 0
        }
        obj[tag]++
        return obj
      }, {}),
  )

  watchEffect(() => console.log(messages.value))

  function removeMessage(index) {
    messages.value.splice(index, 1)
  }

  function removeMessages() {
    messages.value = []
  }

  function checkAll() {
    isCheckAll.value = !isCheckAll.value
    checked.value = []

    if (isCheckAll.value) {
      for (const key in messages.value) {
        checked.value.push(messages.value[key])
      }
    }
    // this.$emit('checked-all', isCheckAll)
  }

  function updateCheckAll() {
    if (checked.value.length === messages.value.length) {
      isCheckAll.value = true
    } else {
      isCheckAll.value = false
    }
  }

  function formatDate(date) {
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Date(date).toLocaleDateString('en', options)
  }

  function truncate(str) {
    return `${strip(str).substr(0, 50)}...`
  }

  return {
    messages,
    checked,
    isCheckAll,
    tags,
    checkAll,
    updateCheckAll,
    truncate,
    formatDate,
    removeMessage,
    removeMessages,
    filteredMessages,
  }
}
