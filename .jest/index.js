import {mount} from '@vue/test-utils'

// export const mountWithAsyncData = async (component, options) => {
//   let data
//   if (component.asyncData) {
//     const asyncDataReq = component.asyncData({app: {$axios: axios}})
//     await options.respondToAsyncData()
//     data = await asyncDataReq
//   }

//   return mount(component, {
//     data: () => data,
//     ...options,
//   })
// }

export async function mountWithAsyncData(component, {asyncDataContext, ...options} = {}) {
  const initialData = options.data === 'function' ? options.data() : null
  if ('data' in options && initialData === null)
    throw new Error('data should be a function that returns an object')
  if (typeof component.asyncData === 'function') {
    const data = await component.asyncData(asyncDataContext)
    options.data = () => ({...(initialData || {}), ...(data || {})})
  }
  return mount(component, options)
}
