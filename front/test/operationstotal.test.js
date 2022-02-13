import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OperationsTotal from '@/components/OperationsTotal.vue'

describe('total of all operations', () => {

  it('should be positive', () => {
    expect(OperationsTotal).toBeTruthy()

    const operations = [
      {
        type: 1,
        value: 100,
      },
      {
        type: 2,
        value: 50,
      }
    ]
  
    const wrapper = mount(OperationsTotal, {
      props: {
        operations,
      },
    })

    const totalValueWrapper = wrapper.get('.total-value');
  
    expect(totalValueWrapper.attributes('class')).toContain('positive')
    expect(totalValueWrapper.get('span').text()).toContain('+')
  })

  it('should be negative', () => {
    expect(OperationsTotal).toBeTruthy()

    const operations = [
      {
        type: 1,
        value: 100,
      },
      {
        type: 2,
        value: 200,
      }
    ]
  
    const wrapper = mount(OperationsTotal, {
      props: {
        operations,
      },
    })

    const totalValueWrapper = wrapper.get('.total-value');
  
    expect(totalValueWrapper.attributes('class')).toContain('negative')
    expect(totalValueWrapper.get('span').text()).toContain('-')
  })

})