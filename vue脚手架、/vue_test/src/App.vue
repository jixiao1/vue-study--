<template>
  <div id="app" ref="app">
    <div>{{ msg }}</div>
    <div v-if="msg1">{{ msg1 }}</div>
    <button @click="clickHandler">拿到msg的信息</button>
    <img src="../src/assets/logo.png" alt="">
    <School ref="school" :schoolAddress="schoolAddress" :school="school" :num="num"
    @add="add"/>
    <hr>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import School from './components/School'
import UserInfo from './components/UserInfo'
export default {
  name: 'App',
  components: {
    School,
    UserInfo
  },
  data () {
    return {
      msg: 'Hello world',
      msg1: '',
      schoolAddress: '北京',
      school: '北京大学',
      num: 10
    }
  },
  methods: {
    clickHandler () {
      // console.log("@@@")
      console.log(this.$refs.app)
      console.log(document.getElementById("app"))
      console.log(this.$refs.school)
      this.msg1 = this.$refs.school.school
    },
    add () {
      this.num++;
    }
  },
}
</script>

<style>
</style>
