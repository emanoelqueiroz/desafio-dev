import { mount } from '@vue/test-utils'

import WarningMessage from '@/components/WarningMessage.vue'

test('show error message', async() => {
  expect(WarningMessage).toBeTruthy()

  const message = 'Error of file type';
  const wrapper = mount(WarningMessage, {
    props: { message },
  })

  expect(wrapper.text()).toContain(message)
})
