<template>
  <div class="Test">
    我在页面的位置： x: {{ point.x }}, y: {{ point.y }}
  </div>
</template>
<script>
import usePoint from '../hooks/index.js'
export default {
  name: 'Test',
  setup () {
    // let query = document.querySelector('.Test')
    let point = usePoint()
    return {
      point
    }
  }
}
</script>
<style scoped>
</style>