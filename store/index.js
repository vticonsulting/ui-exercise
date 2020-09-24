export const strict = process.env.NODE_ENV !== 'production'

export const state = () => ({
  messages: [],
})

export const getters = {
  tags: state =>
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
    return state.messages.filter(message => message.tags.indexOf(tag) > -1)
  },
  getMessageById: state => id => {
    return state.messages.find(message => message.id == id)
  },
  selectedMessages: state => {
    return state.messages.filter(message => message.isSelected)
  },
  allSelected: state => {
    return (
      state.messages.length &&
      state.messages.every(message => message.isSelected)
    )
  },
}

export const mutations = {
  INIT: (state, messages) =>
    (state.messages = messages.map(message => {
      return {
        ...message,
        isSelected: false,
      }
    })),
  TOGGLE_ALL: (state, messages) =>
    (state.messages = messages.map(message => {
      return {
        ...message,
        isSelected: state.messages.every(message => message.isSelected)
          ? false
          : true,
      }
    })),
  REMOVE_MESSAGE(state, messageId) {
    state.messages = state.messages.filter(message => message.id !== messageId)
  },
  REMOVE_MESSAGES(state) {
    state.messages = []
  },
}

export const actions = {
  toggleAll: ({commit}, payload) => {
    commit('TOGGLE_ALL', payload)
  },
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
