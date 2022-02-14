<template>
  <div class="loading-wrapper">
    <div class="loading"></div>
  </div>
</template>

<style lang="scss" scoped>
  $color-green: hsla(160, 100%, 37%, 1);

  .loading-wrapper {
    padding: 21px 13px;
    display: flex;
    justify-content: center;
  }

  .loading {
    border: 2px solid $color-green;
    border-right-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: rotate 0.5s forwards infinite linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>