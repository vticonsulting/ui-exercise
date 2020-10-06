<template>
  <div class="space-y-1">
    <NuxtLink
      to="/messages"
      class="flex items-center px-2 py-2 font-medium text-gray-900 transition duration-150 ease-in-out bg-gray-200 rounded-md group focus:outline-none focus:bg-gray-50"
    >
      <SvgIcon icon="inbox" class="mr-1 text-2xl" />
      Inbox
    </NuxtLink>
    <NuxtLink
      :to="`/messages/tags/${tag}`"
      v-for="(count, tag) in tags"
      :key="tag"
      :class="tag"
      class="flex items-center px-2 py-2 font-medium text-gray-900 transition duration-150 ease-in-out bg-gray-200 rounded-md group focus:outline-none focus:bg-gray-50"
    >
      <SvgIcon icon="inbox" class="mr-1 text-2xl" />
      <span class="flex items-center justify-between w-full capitalize">
        <span class="flex-1">{{ tag }}</span>
        <span
          class="flex items-center justify-center w-8 h-8 text-xs font-bold text-gray-600 bg-gray-100 rounded-full"
        >
          {{ count }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>

<script>
import {defineComponent} from '@nuxtjs/composition-api'
import useMessages from '@/composables/useMessages'

export default defineComponent({
  name: 'SidebarMenu',
  setup() {
    const {tags} = useMessages()
    return {
      tags,
    }
  },
  data() {
    return {
      links: [{title: 'Inbox', to: {name: 'index'}, icon: 'inbox'}],
    }
  },
})
</script>
