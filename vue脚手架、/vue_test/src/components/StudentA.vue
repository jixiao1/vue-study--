<template>
  <div class="studentA">
    <h1>A同学的姓名和年龄</h1>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="clickHandfler">给数据给他的兄弟</button>
      <button @click="clickHandfler1">给数据给他的兄弟的子组件</button>
  </div>
</template>
<script>
export default {
  name: 'StudentA',
  data () {
    return {
      name: 'zsA',
      age: 21,
      info: '这里还是A同学的信息',
      info1: '这里还是A同学的信息传给b组件的子组件的信息'
    }
  },
  methods: {
    clickHandfler () {
      this.bus.$emit('hello', this.info)
    },
    clickHandfler1 () {
      this.bus.$emit('hello1', this.info1)
    }
  }
}
</script>
<style scoped>
</style>