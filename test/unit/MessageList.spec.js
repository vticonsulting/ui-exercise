import {createLocalVue, shallowMount} from '@vue/test-utils'
import MessageList from '@/components/MessageList'
import '@/plugins/vue-feather-icons'

describe('MessageList', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(MessageList, {
      propsData: {
        messages: [
          {
            id: 1,
            subject: 'Subject',
            sender: 'sender@example.com',
            body: 'Message Body',
            tags: ['tag-1', 'tag-2'],
          },
        ],
      },
      data() {
        return {
          isCheckAll: false,
          checkedMessages: [],
        }
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
