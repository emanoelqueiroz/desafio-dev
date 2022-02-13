export function getType(typeNumber) {
  return {
    1: {
      name: 'Débito',
      nature: 'input'
    },
    2: {
      name: 'Boleto',
      nature: 'output'
    },
    3: {
      name: 'Financiamento',
      nature: 'output'
    },
    4: {
      name: 'Crédito',
      nature: 'input'
    },
    5: {
      name: 'Recebimento Empréstimo',
      nature: 'input'
    },
    6: {
      name: 'Vendas',
      nature: 'input'
    },
    7: {
      name: 'Recebimento TED',
      nature: 'input'
    },
    8: {
      name: 'Recebimento DOC',
      nature: 'input'
    },
    9: {
      name: 'Aluguel',
      nature: 'output'
    },
  }[typeNumber]
}

export function rowClass(type) {
  const typeObj = this.getType(type)

  if (typeObj.nature === 'output')
    return 'negative'

  return 'positive'
}
    
export function formatValue(value) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
};

export function formatDate(date) {
  return (new Date(date)).toLocaleString()
}

export function formatCPF(value) {
  return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9, 11)}`
}