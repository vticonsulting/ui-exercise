export async function init({app, store, error, isClient}) {
  if (isClient) return

  try {
    const messages = await app.$axios.$get('messages')
    store.dispatch('message/setMessages', messages)
  } catch (err) {
    store.dispatch('message/setMessages', [])
    error({statusCode: 500, message: 'Oops, try again'})
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')
export const truncate = str => `${strip(str).substr(0, 50)}...`
export const flattened = arr => [].concat(...arr)
