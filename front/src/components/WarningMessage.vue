<template>
  <div class="message-block">
    {{message}}
  </div>
</template>

<script setup>
  defineProps({
    message: String
  })
</script>

<style lang="scss">
  $color-red: #e94335;

  .message-block {
    color: $color-red;
    padding: 8px 13px;
    border: 1px solid $color-red;
    border-radius: 5px;
    background: fade-out($color-red, 0.9);
    animation: scaleDown 0.2s forwards;
    transform-origin: top;
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