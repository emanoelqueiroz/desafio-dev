<template>
  <div class="message-block" :class="type">
    {{message}}
  </div>
</template>

<script setup>
  defineProps({
    type: String,
    message: String,
  })
</script>

<style lang="scss">
  $color-red: #e94335;
  $color-info: #4484f5;
  $color-warning: #fcbc07;
  $color-success: #34a853;
  $color-grey: #ddd;

  .message-block {
    color: $color-grey;
    padding: 8px 13px;
    border: 1px solid $color-grey;
    border-radius: 5px;
    animation: scaleDown 0.2s forwards;
    transform-origin: top;
    text-align: center;

    &.danger {
      color: $color-red;
      border-color: $color-red;
      background: fade-out($color-red, 0.9);
    }

    &.warning {
      color: $color-warning;
      border-color: $color-warning;
      background: fade-out($color-warning, 0.9);
    }

    &.info {
      color: $color-info;
      border-color: $color-info;
      background: fade-out($color-info, 0.9);
    }

    &.success {
      color: $color-success;
      border-color: $color-success;
      background: fade-out($color-success, 0.9);
    }
  }

  @media (min-width: 800px) {
    .message-block {
      text-align: left;
    }
  }

  @keyframes scaleDown {
    from {
      transform: scaleY(0);
    }

    to {
      transform: scaleY(1);
    }
  }
</style>