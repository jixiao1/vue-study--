<template>
  <div class="studentItemb">
    studentITEM
    <div v-if="studentInfo">{{ studentInfo}}</div>
  </div>
</template>
<script>
export default {
  name: 'studentItemb',
  data () {
    return {
      studentInfo: ''
    }
  },
  mounted() {
    this.bus.$on('hello1', data => {
      console.log("父亲的子组件传过来的值", data)
      this.studentInfo = data
    })
  },
}
</script>
<style scoped>
</style>