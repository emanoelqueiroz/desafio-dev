import { mount } from '@vue/test-utils'

import Alert from '@/components/Alert.vue'

test('show error message', async() => {
  expect(Alert).toBeTruthy()

  const message = 'Error of file type';
  const wrapper = mount(Alert, {
    props: { message, type: 'danger' },
  })

  expect(wrapper.text()).toContain(message)
})
