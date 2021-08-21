<template>
  <div class="publish2">
    publish2
    <div v-if="pubSub">{{ pubSub }}</div>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name: 'publish2',
  data () {
    return {
      pubSub: '',
      id: ''
    }
  },
  mounted() {
    // 订阅者
    this.id = pubsub.subscribe('hello', (msgName, data) => {
      console.log("发布订阅。。。。", msgName, data)
      this.pubSub = data
    })
  },
  beforeDestroy() {
    this.$off(this.id)
  },
}
</script>
<style scoped>
</style>