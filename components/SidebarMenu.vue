<template>
  <div class="space-y-1">
    <NuxtLink exact to="/messages" @click.native="closeMenu" class="nav-link inbox">
      <SvgIcon icon="inbox" class="mr-1 text-2xl" />
      Inbox
    </NuxtLink>
    <NuxtLink
      exact
      :to="`/messages/tags/${tag}`"
      v-for="(count, tag) in tags"
      :key="tag"
      :class="tag"
      @click.native="closeMenu"
      class="nav-link"
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
import {mapMutations} from 'vuex'
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
  methods: {
    ...mapMutations(['closeMenu']),
  },
})
</script>

<style lang="postcss">
.nav-link {
  @apply flex rounded-r-full py-1 pl-6 flex items-center px-2 py-2 font-medium text-gray-900 transition duration-150 ease-in-out  rounded-md group focus:outline-none focus:bg-gray-50;
}

.nav-link:hover {
  @apply bg-gray-200;
}

.nav-link.is-active {
  @apply font-bold text-black bg-gray-200;
}

.nav-link.inbox {
  @apply text-red-500;
}

.nav-link.inbox.is-active {
  @apply text-red-500 bg-red-100;
}

span.travel {
  @apply text-white bg-green-500;
}

span.work {
  @apply text-white bg-blue-500;
}

.nav-link.work {
  @apply text-blue-500;
}

.nav-link.travel {
  @apply text-green-500;
}

.nav-link.work.is-active {
  @apply text-blue-500 bg-blue-100;
}

.nav-link.travel.is-active {
  @apply text-green-500 bg-green-100;
}
</style>
