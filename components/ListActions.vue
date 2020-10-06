<template>
  <div class="invisible">
    {{ checked }}
    <span class="order-1 ml-3 rounded-md shadow-sm sm:order-0 sm:ml-0">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
      >
        Share
      </button>
    </span>
    <span class="rounded-md shadow-sm order-0 sm:order-1 sm:ml-3">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-indigo-700"
      >
        Create
      </button>
    </span>
  </div>
</template>

<script>
import {defineComponent} from '@nuxtjs/composition-api'
import useMesssages from '@/composables/useMessages'

export default defineComponent({
  setup() {
    const {messages, checked} = useMesssages()

    return {
      messages,
      checked,
    }
  },
})
</script>
