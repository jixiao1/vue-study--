<template>
  <div id="Sumdemo">
    <h1>demo中hooks的使用</h1>
    <div>sum:{{ sum }}</div>
    <div>
      我在页面的位置： x: {{ point.x }}, y: {{ point.y }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import usePoint from '../hooks/index.js'
export default {
  name: 'Sumdemo',
  setup () {
    let sum = ref(0)
    let point =  usePoint()
    return {
      sum,
      point
    }
  }
}
</script>
<style scoped>

</style>