<template>
  <div>
    <nav
      class="shadow-md bg-gray-200 text-white mb-8"
      role="navigation"
      aria-label="main navigation"
    >
      <a
        class="inline-block text-red-500 uppercase font-bold ml-4 py-4"
        href="/"
      >
        <LogoMark class="h-6 w-6" />
        Mail
      </a>
    </nav>

    <main class="m-4 flex flex-col md:flex-row">
      <aside class="mr-6 w-full md:w-48">
        <a
          class="inline-block border border-gray-400 text-black rounded-full shadow hover:shadow-md py-2 px-4 my-2 mb-4"
          href="#"
          title="Compose"
        >
          <!-- <svgicon icon="plus" /> -->
          Compose
        </a>

        <div class="-ml-2 text-xs">
          <NuxtLink
            v-for="(item, key) of items"
            :key="key"
            :to="item.to"
            exact
            class="nav-link flex items-center pr-4 py-1 pl-6 hover:bg-gray-400 rounded-r-full"
            :class="item.icon"
          >
            <InboxIcon class="w-6 h-6 mr-1" />
            {{ item.title }}
          </NuxtLink>

          <NuxtLink
            v-for="(value, key) in tags"
            :key="key"
            :to="`/tags/${key}`"
            class="nav-link flex items-center pr-4 py-1 pl-6 hover:bg-gray-400 rounded-r-full capitalize"
            :class="key"
          >
            <TagIcon class="w-6 h-6 mr-1" />
            {{ key }}
          </NuxtLink>
        </div>
      </aside>

      <div class="flex-1">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import {AlertCircleIcon} from 'vue-feather-icons'

import {mapGetters} from 'vuex'

export default {
  components: {
    AlertCircleIcon,
  },
  data() {
    return {
      items: [{title: 'Inbox', to: {name: 'index'}, icon: 'inbox'}],
    }
  },
  computed: {
    ...mapGetters(['tags']),
  },
}
</script>
