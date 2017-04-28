<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  body,
  html {
    width: 100%;
    height: 100%;
  }

  .main-container {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'app'
  }
</script>