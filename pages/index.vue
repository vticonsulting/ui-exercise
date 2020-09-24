<template>
  <table class="text-sm text-gray-600 table-fixed w-full">
    <thead v-if="messages.length">
      <tr class="flex border-b text-2xl">
        <th class="pr-3 text-left font-normal">
          <input v-model="allSelected" type="checkbox" class="form-checkbox" />
        </th>
        <th
          class="msg__col flex items-center text-left font-normal pr-2 flex-grow"
        >
          <div :class="[selectedMessages.length ? 'hidden' : 'flex ']">
            <a class="mr-1" href="#" title="Refresh">
              <RefreshIcon class="w-5 h-5" />
            </a>
          </div>
          <div
            class="flex items-center space-x-2"
            v-show="selectedMessages.length"
          >
            <a href="#" title="Archive selected">
              <ArchiveIcon class="w-5 h-5" />
            </a>
            <a href="#" title="Report spam">
              <AlertIcon class="w-5 h-5" />
            </a>
            <a @click="removeMessages" href="#" title="Delete">
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
    <tbody v-if="messages.length">
      <Message
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </tbody>
    <tbody v-else>
      <tr>
        <td class="p-10">No Messages in Inbox</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {init, strip} from '~/shared'

export default {
  fetch: init,
  computed: {
    allSelected: {
      get() {
        return this.$store.getters.allSelected
      },
      set() {
        this.$store.dispatch('toggleAll', this.messages)
      },
    },
    ...mapState(['messages']),
    ...mapGetters(['selectedMessages']),
  },
  methods: {
    ...mapActions(['toggleAll', 'removeMessages']),
  },
}
</script>
