<template>
  <div class="total">
    <span class="total-label">Total</span>
    <div class="total-value" :class="statusClass">
      <span v-if="total < 0">
        -
      </span>
      <span v-else>
        +
      </span>
      {{formatValue(Math.abs(total))}}
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { formatValue, getType } from '@/utils/operations.js'

  const props = defineProps({
    operations: {
      type: Array,
      default: []
    },
  })
  
  const total = computed(() => {
     return props.operations.reduce((acc, operation) => {
        const type = getType(operation.type)

        if (type.nature === 'output')
          return acc - operation.value

        return acc + operation.value
      }, 0)
  })

  const statusClass = computed(() => total.value < 0 ? 'negative' : 'positive' )
</script>

<style lang="scss" scoped>
  $color-negative: #e94335;
  $color-positive: #34a853;

  .positive {
    color: $color-positive;
  }

  .negative {
    color: $color-negative;
  }

  .total {
    border-radius: 5px;
    padding: 8px 13px;
    background: #222;
    text-align: center;

    .total-value {
      font-size: 25px;
      font-weight: 700;
    }
  }

  
  @media (min-width: 800px) {
    .total {
      text-align: left;
    }
  }
</style>