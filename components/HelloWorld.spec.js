import {mount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: {msg},
//     })
//     expect(wrapper.text()).toContain(msg)
//   })
// })

describe('HelloWorld', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.exists()).toBeTruthy()
  })
})
