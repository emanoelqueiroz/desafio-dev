<template>
  <div class="operation-item" :class="rowClass(operation.type)">
    <div class="type-icon">
      ⭧
    </div>
    <div class="info">
      <div class="store-name">
        {{operation.storeName}}
      </div>
      <div class="store-owner">
        {{operation.ownerName}} - {{formatCPF(operation.cpf)}} - {{operation.card}}
      </div>
    </div>
    <span class="operation-date">
      {{formatDate(operation.date)}}
    </span>
    <div class="operation-tag-wrapper">
      <span class="operation-tag">
        {{getType(operation.type).name}}
      </span>
    </div>
    <div class="operation-item-total text-right">
      <span class="total-symbol" v-if="getType(operation.type).nature === 'output'">
        -
      </span>
      <span class="total-symbol" v-else>
        +
      </span>
      <span class="total-value">{{formatValue(operation.value)}}</span>
    </div>
  </div>
</template>

<script setup>
import { rowClass, getType, formatValue, formatDate, formatCPF } from '@/utils/operations.js'

defineProps({
  operation: Object
})
</script>

<style lang="scss" scoped>
  $color-white: #fff;
  $color-negative: #e94335;
  $color-positive: #34a853;

  .operation-item {
    padding: 13px 13px;
    background: #222;
    margin-top: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: 3px solid;

    .type-icon {
      display: none;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin-right: 13px;
      border-radius: 50px;
      font-size: 28px;
    }

    &.negative {
      border-color: $color-negative;

      .type-icon {
        color: $color-negative;
        border: 1px solid $color-negative;
        background: fade-out($color-negative, 0.9);
        transform: scale(-1);
      }
    }

    &.positive {
      border-color: $color-positive;
      
      .type-icon {
        color: $color-positive;
        border: 1px solid $color-positive;
        background: fade-out($color-positive, 0.9);
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.4em;
      flex: 1;
    }

    .operation-date {
      font-size: 11px;
      position: absolute;
      bottom: 3px;
      right: 13px;
    }

    .operation-tag-wrapper {
      position: absolute;
      top: -18px;
      left: 0;
      right: 0;
      text-align: center;
    }

    .operation-tag {
      margin: 0 20px;
      font-size: 11px;
      background: #3b1e4f;
      padding: 5px;
      line-height: 1em;
      border-radius: 5px;
      color: #ddd;
    }

    .store-name {
      color: $color-white;
      font-size: 16px;
      font-weight: 700;
    }

    .store-owner {
      font-size: 13px;
    }

    .operation-item-total {
      color: $color-white;
      font-size: 16px;
      font-weight: 700;

      span {
        font-weight: 700;
      }
    }
  }

  @media (min-width: 800px) {
    .operation-item {
      margin-top: 13px;
      border: 0;

      .type-icon {
        display: flex;
      }

      .operation-tag-wrapper {
        position: static;
      }

      .store-name, .operation-item-total {
        font-size: 18px;
      }

    }
  }
</style>