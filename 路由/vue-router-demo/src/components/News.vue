<template>
  <div class="News">
    News
    <input type="text">
  </div>
</template>
<script>
export default {
  name: 'News',
  beforeDestroy () {
    console.log('news组件被销毁了===')
  }
}
</script>
<style>
 .News {}
</style>
