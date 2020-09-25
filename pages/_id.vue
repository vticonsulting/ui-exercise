<template>
  <table class="table-fixed w-full">
    <thead>
      <tr class="flex border-b text-grey-darker text-2xl">
        <th class="flex text-left font-normal pr-2 flex-grow">
          <div class="flex space-x-2">
            <nuxt-link to="/">
              <ArrowLeftIcon class="w-5 h-5" />
            </nuxt-link>
            <a href="#" title="Archive selected">
              <ArchiveIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Report spam">
              <AlertIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Delete">
              <DeleteIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Mark as read">
              <MailIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Snooze">
              <ClockIcon class="w-5 h-5" />
            </a>
          </div>
          <a class="mr-1" href="#" title="More">
            <MoreVerticalIcon class="w-5 h-5" />
          </a>
        </th>
        <th class="msg__col text-left font-normal">
          <a href="#" title="Settings">
            <SettingsIcon class="w-5 h-5" />
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-6">
          <div class="prose">
            <span
              v-for="tag in message.tags"
              :key="tag"
              class="bg-gray-300 rounded text-xs mr-1 p-1 capitalize"
              :class="tag"
            >
              {{ tag }}
            </span>
            <h1>{{ message.subject }}</h1>
            <span class="text-gray-700">
              <span class="block text-xs uppercase tracking-wider">From</span>
              <b>{{ message.sender }}</b>
            </span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="max-w-lg" v-html="message.body" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {init} from '~/shared'

export default {
  name: 'MessagePage',
  fetch: init,
  data() {
    return {
      message: this.$store.getters.getMessageById(this.$route.params.id),
    }
  },
}
</script>
