<template>
  <tr
    class="relative group hover:bg-gray-200 hover:shadow cursor-pointer flex flex-col md:flex-row border-b"
  >
    <td class="md:py-2 pr-3">
      <input
        v-model="message.isSelected"
        @click.stop=""
        type="checkbox"
        class="form-checkbox"
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
        v-if="message.tags.length"
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
      {{ shortBody }}
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
</template>

<script>
import {strip} from '~/shared'
import {mapActions} from 'vuex'

export default {
  props: {
    message: {
      type: Object,
    },
  },
  computed: {
    shortBody() {
      return `${strip(this.message.body).substr(0, 50)}...`
    },
  },
  methods: {
    goTo(id) {
      this.$router.push({path: `/${id}`})
    },
    ...mapActions(['removeMessage']),
  },
}
</script>
