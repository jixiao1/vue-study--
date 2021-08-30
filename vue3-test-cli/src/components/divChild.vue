<template>
  <div class="divChild">
    <h1>chILD</h1>
    <div>
      <div></div>
    </div>
    <Son></Son>
  </div>
</template>
<script>
import { inject }  from 'vue'
import Son from './divSon'
export default {
  name: 'chilkd1',
  components: {
    Son
  },
  setup () {
    let x = inject('car')
    console.log("x=====", x)
    return {
      x
    }
  }
}
</script>
<style scoped>
</style>