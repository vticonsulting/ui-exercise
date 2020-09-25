<template>
  <MessageList :messages="$store.state.messages" />
</template>

<script>
import {init} from '~/shared'

export default {
  name: 'InboxPage',
  fetch: init,
}
</script>
