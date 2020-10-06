<template>
  <div>
    <table class="w-full">
      <tbody>
        <tr
          v-for="message in messages"
          :key="message.id"
          class="relative flex flex-col border-b cursor-pointer group hover:bg-gray-200 hover:shadow md:flex-row"
        >
          <td class="md:py-2 md:px-3 md:pl-6">
            <input
              class="w-5 h-5 text-gray-500 form-checkbox"
              type="checkbox"
              :value="message"
              v-model="checkedMessages"
              @change="updateCheckAll()"
            />
          </td>
          <td class="pr-6 md:py-2" @click.stop="goTo(message.id)">
            {{ message.sender }}
          </td>
          <td
            class="pr-1 text-black whitespace-no-wrap md:py-2"
            v-if="message.tags.length"
            @click.stop="goTo(message.id)"
          >
            <span
              class="p-1 mr-1 text-xs capitalize bg-gray-400 rounded"
              :key="tag"
              v-for="tag in message.tags"
              :class="tag"
            >
              {{ tag }}
            </span>
          </td>
          <td
            class="pr-4 font-medium text-black md:py-2 xl:flex-no-grow"
            @click.stop="goTo(message.id)"
          >
            {{ message.subject }}
          </td>
          <td class="flex-grow hidden pr-2 md:py-2 xl:block" @click.stop="goTo(message.id)">
            {{ truncate(message.body) }}
          </td>
          <td
            class="px-8 text-right text-gray-600 md:py-2 group-hover:invisible"
            @click.stop="goTo(message.id)"
          >
            {{ formatDate(message.date) }}
          </td>
          <td class="pr-6 md:py-2">
            <MessageDeleteButton> x </MessageDeleteButton>
            <button @click="archive(message.id)" class="text-xl" type="button">
              <SvgIcon icon="dots-vertical" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MessageService from '@/services/MessageService'
import {strip} from '@/helpers'

export default {
  name: 'Table',
  data: () => ({
    items: [{title: 'Inbox', to: {name: 'index'}, icon: 'inbox'}],
    isCheckAll: false,
    checkedMessages: [],
    messagesTotal: 0,
    message: {},
    perPage: 20,
  }),
  computed: {
    tags() {
      return this.state.messages
        .map(message => message.tags)
        .reduce((acc, val) => acc.concat(val), [])
        .reduce((obj, tag) => {
          if (!obj[tag]) {
            obj[tag] = 0
          }
          obj[tag]++
          return obj
        }, {})
    },
    // ...mapGetters('message', {
    //   tags: 'getTags',
    // }),
  },
  methods: {
    fetchMessages({commit, dispatch, state}, {page}) {
      return MessageService.getMessages()
        .then(response => {
          commit('SET_MESSAGES', response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching messages: ' + error.message,
          }
          dispatch('notification/add', notification, {root: true})
        })
    },
    getMessageById(id) {
      return this.messages.find(message => message.id === id)
    },
    getMessagesByTag(tag) {
      return this.messages.filter(message => message.tags.includes(tag))
    },
    archive(id) {
      console.log(id)
    },
    goTo(id) {
      this.$router.push({path: `/messages/${id}`})
    },
    truncate(str) {
      return `${strip(str).substr(0, 50)}...`
    },
    // checkAll() {
    //   this.isCheckAll = !this.isCheckAll
    //   this.checkedMessages = []
    //   if (this.isCheckAll) {
    //     for (const key in this.messages) {
    //       this.checkedMessages.push(this.messages[key])
    //     }
    //   }
    // },
    checkAll(isCheckAll) {
      if (isCheckAll) {
        for (const key in this.messages) {
          this.checkedMessages.push(this.messages[key])
        }
      } else {
        this.checkedMessages = []
      }
    },
    updateCheckAll() {
      if (this.checkedMessages.length === this.messages.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    },

    formatDate(date) {
      const options = {year: 'numeric', month: 'short', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
