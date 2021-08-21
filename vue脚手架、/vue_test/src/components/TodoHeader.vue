<template>
  <div class="todoHeader">
    <input type="text" v-model="name">
    <button @click="clickHandler">添加</button>
  </div>
</template>
<script>
export default {
  name: 'todoHeader',
  methods: {
    clickHandler () {
      if (!this.name) return
      this.add(this.name)
      this.name = ''
    }
  },
  data () {
    return {
      name: ''
    }
  },
  props: ['add']
}
</script>
<style scoped>
</style>