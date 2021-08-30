<template>
  <div class="Son">
    <h1>son</h1>
  </div>
</template>
<script>
import { inject }  from 'vue'
export default {
  name: 'son',
  setup () {
    let x1 = inject('car')
    console.log("x111=====", x1)
    return {
      x1
    }
  }
}
</script>
<style scoped>
</style>