<template>
  <table class="w-full">
    <thead v-if="messages.length">
      <tr class="flex border-b text-2xl">
        <th class="pr-3 md:pl-3 text-left font-normal">
          <input
            class="form-checkbox"
            type="checkbox"
            @click="checkAll()"
            v-model="isCheckAll"
          />
        </th>
        <th class="flex items-center text-left font-normal pr-2 flex-grow">
          <div :class="[checkedMessages.length ? 'hidden' : 'flex']">
            <a class="mr-1" href="#" title="Refresh">
              <RefreshIcon class="w-5 h-5" />
            </a>
          </div>
          <div
            v-show="checkedMessages.length"
            class="flex items-center space-x-2"
          >
            <a href="#" title="Archive selected">
              <ArchiveIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Report spam">
              <AlertIcon class="w-5 h-5" />
            </a>
            <a title="Delete">
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
      <tr
        v-for="message in messages"
        :key="message.id"
        class="relative group hover:bg-gray-200 hover:shadow cursor-pointer flex flex-col md:flex-row border-b"
      >
        <td class="md:py-2 md:px-3">
          <input
            class="form-checkbox"
            type="checkbox"
            :value="message"
            v-model="checkedMessages"
            @change="updateCheckAll()"
          />
        </td>
        <td class="md:py-2 pr-6" @click.stop="goTo(message.id)">
          {{ message.sender }}
        </td>
        <td
          class="md:py-2 pr-1 text-black whitespace-no-wrap"
          v-if="message.tags.length"
          @click.stop="goTo(message.id)"
        >
          <span
            class="mr-1 p-1 bg-gray-400 rounded text-xs capitalize"
            :key="tag"
            v-for="tag in message.tags"
            :class="tag"
          >
            {{ tag }}
          </span>
        </td>
        <td
          class="md:py-2 pr-4 text-black font-medium xl:flex-no-grow"
          @click.stop="goTo(message.id)"
        >
          {{ message.subject }}
        </td>
        <td
          class="md:py-2 hidden xl:block pr-2 flex-grow"
          @click.stop="goTo(message.id)"
        >
          {{ truncate(message.body) }}
        </td>
        <td
          class="md:py-2 pr-2 text-right group-hover:invisible"
          @click.stop="goTo(message.id)"
        >
          {{ new Date(message.date).toLocaleDateString() }}
        </td>
        <td
          class="invisible group-hover:visible absolute right-0 align-middle pr-2 py-2"
        >
          <!-- <span class="align-middle text-sm"> -->
          <a @click.stop="" href="#" class="trash" title="Delete">
            <ArchiveIcon class="w-5 h-5" />
          </a>
          <a
            @click.stop="removeMessage(message)"
            href="#"
            class="trash"
            title="Delete"
          >
            <DeleteIcon class="w-5 h-5" />
          </a>
          <a @click.stop="" href="#" class="mark" title="Mark as unread">
            <MailIcon class="w-5 h-5" />
          </a>
          <a @click.stop="" href="#" class="snooze" title="Snooze">
            <ClockIcon class="w-5 h-5" />
          </a>
          <!-- </span> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapActions} from 'vuex'
import {init, strip} from '~/shared'

export default {
  name: 'MessageList',
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isCheckAll: false,
    checkedMessages: [],
  }),
  methods: {
    goTo(id) {
      this.$router.push({path: `/${id}`})
    },
    truncate(str) {
      return `${strip(str).substr(0, 50)}...`
    },
    checkAll() {
      this.isCheckAll = !this.isCheckAll
      this.checkedMessages = []
      if (this.isCheckAll) {
        for (var key in this.messages) {
          this.checkedMessages.push(this.messages[key])
        }
      }
    },
    updateCheckAll() {
      if (this.checkedMessages.length == this.messages.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    },
  },
}
</script>
