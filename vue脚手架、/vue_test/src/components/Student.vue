<template>
  <div class="Student">
    <h1>student</h1>
    <div>{{ student }}</div>
    <div> {{  age }}</div>
    <button @click="clickHandler">子组件给父组件传值</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      student: 'zs',
      age: 20
    }
  },
  props: ['student1'],
  methods: {
    clickHandler () {
      this.student1(this.student)
    }
  },
}
</script>
<style scoped>
</style>