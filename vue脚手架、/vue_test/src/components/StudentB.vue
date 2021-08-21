<template>
  <div class="studentB">
    <h1>B同学的姓名和年龄</h1>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div v-if="infoB">{{infoB}}</div>
    <studentItem></studentItem>
  </div>
</template>
<script>
import studentItem from './StudentbiTEM'
export default {
  name: 'StudentB',
  data () {
    return {
      name: 'zs',
      age: 20,
      infoB: ''
    }
  },
  components: {
    studentItem
  },
  mounted() {
    this.bus.$on('hello',(data)=> {
      console.log(data)
      this.infoB = data
    })
  },
}
</script>
<style scoped>
</style>