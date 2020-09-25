export const strict = process.env.NODE_ENV !== 'production'

export const state = () => ({
  messages: [],
})

export const getters = {
  getTags: state =>
    state.messages
      .map(message => message.tags)
      .reduce((acc, val) => acc.concat(val), [])
      .reduce((obj, tag) => {
        if (!obj[tag]) {
          obj[tag] = 0
        }
        obj[tag]++
        return obj
      }, {}),
  getMessagesByTag: state => tag => {
    return state.messages.filter(message => message.tags.includes(tag))
  },
  getMessageById: state => id => {
    return state.messages.find(message => message.id === id)
  },
}

export const mutations = {
  INIT: (state, messages) => (state.messages = messages),
  REMOVE_MESSAGE(state, messageId) {
    state.messages = state.messages.filter(message => message.id !== messageId)
  },
  REMOVE_MESSAGES(state) {
    state.messages = []
  },
}

export const actions = {
  removeMessage({commit, state}, message) {
    commit('REMOVE_MESSAGE', message.id)
  },
  removeMessages({commit}) {
    commit('REMOVE_MESSAGES')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
