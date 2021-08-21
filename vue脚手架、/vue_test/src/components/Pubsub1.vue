<template>
<div class="publish1">
  <div>publish1</div>
  <button @click="clickHandler">传值</button>
</div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name: 'publish1',
  data () {
    return {
      publish1: 'publish1传给publish2组件'
    }
  },
  methods: {
    clickHandler () {
      // 发布者
      pubsub.publish('hello', this.publish1)
    }
  },
}
</script>
<style scoped>

</style>