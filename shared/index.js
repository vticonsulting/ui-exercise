export async function init({app, store, error, isClient}) {
  if (isClient) return

  try {
    const messages = await app.$axios.$get(
      `${process.env.baseURL}/api/messages`,
    )
    store.commit('INIT', messages)
  } catch (err) {
    store.commit('INIT', [])
    error({statusCode: 500, message: 'Oops, try again'})
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')
