import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OperationsCard from '@/components/OperationsCard.vue'

const operation = {
  id: 1,
  type: 3,
  ownerName: "JOÃO MACEDO",
  storeName: "BAR DO JOÃO",
  cpf: "09620676017",
  card: "4753****3153",
  date: "2019-03-01T18:34:53.000Z",
  value: 14200,
  createdAt: "2022-02-13",
  updatedAt: "2022-02-13"
}

describe('card with operation info', () => {

  it('show the info of an operation', () => {    
    expect(OperationsCard).toBeTruthy()
  
    const wrapper = mount(OperationsCard, {
      props: {
        operation,
      },
    })

    const storeNameElement = wrapper.get('.store-name')
    const storeOwnerElement = wrapper.get('.store-owner')
    const operationDateElement = wrapper.get('.operation-date')
    const operationTagElement = wrapper.get('.operation-tag')
    const operationItemTotalElement = wrapper.get('.operation-item-total')
    const value = operation.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    expect(storeNameElement.text()).toBe('BAR DO JOÃO')

    expect(storeOwnerElement.text()).toBe('JOÃO MACEDO - 096.206.760-17 - 4753****3153')

    expect(operationDateElement.text()).toBe('01/03/2019 15:34:53')

    expect(operationTagElement.text()).toBe('Financiamento Saída')

    expect(operationItemTotalElement.get('.total-symbol').text()).toBe('-')
    expect(operationItemTotalElement.get('.total-value').text()).toBe(value)
  })

  it('show the positive symbol of a positive operation', () => {    
    expect(OperationsCard).toBeTruthy()

    const operationCopy = { ...operation, type: 1 }  
    const wrapper = mount(OperationsCard, {
      props: {
        operation: operationCopy,
      },
    })

    const operationItemTotalElement = wrapper.get('.total-symbol')

    expect(operationItemTotalElement.text()).toBe('+')
  })

  it('show the negative symbol of a negative operation', () => {    
    expect(OperationsCard).toBeTruthy()

    const operationCopy = { ...operation, type: 2 }  
    const wrapper = mount(OperationsCard, {
      props: {
        operation: operationCopy,
      },
    })

    const operationItemTotalElement = wrapper.get('.total-symbol')

    expect(operationItemTotalElement.text()).toBe('-')
  })

});