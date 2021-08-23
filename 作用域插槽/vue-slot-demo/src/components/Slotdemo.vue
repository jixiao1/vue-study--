<template>
  <div class="SlotDemo">
    <h1>{{ title }}</h1>
    <slot :games="games"></slot>
  </div>
</template>
<script>
export default {
  name: 'slotDemo',
  data () {
    return {
      games: ['吃饭', '睡觉', '打豆豆']
    }
  },
  props: ['title']
}
</script>
<style scoped>
.SlotDemo {
  width: 300px;
  height: 300px;
  background-color: lightblue;
  text-align: center;
}
</style>
