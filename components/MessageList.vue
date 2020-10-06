<template>
  <div>
    <table class="w-full">
      <tbody>
        <MessageItem v-for="message in messages" :key="message.id" :message="message">
          <template v-slot:left="{isChecked, data, hello}">
            <!-- Data: {{ data }} isChecked?: {{ isChecked }} -->
            <input type="checkbox" :checked="isChecked" />
            <!-- <input
              class="form-checkbox"
              type="checkbox"
              :value="message"
              v-model="checkedMessages"
              @change="updateCheckAll()"
            /> -->
            <button @click="hello">Child Component Button</button>

            <button @click="pressed">Press Me</button>
          </template>

          <template v-slot:right>
            <button @click="pressed">Press Me</button>
          </template>
        </MessageItem>
      </tbody>
    </table>

    <pre>{{ checkedMessages }}</pre>
  </div>
</template>

<script>
import {strip} from '@/helpers'
import {messages} from '../server/emails.json'
export default {
  name: 'MessageList',
  data: () => ({
    isCheckAll: false,
    checkedMessages: [],
    messages,
  }),
  methods: {
    pressed() {
      alert('parent')
    },
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
        for (const key in this.messages) {
          this.checkedMessages.push(this.messages[key])
        }
      }
    },
    updateCheckAll() {
      if (this.checkedMessages.length === this.messages.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    },
  },
}
</script>
