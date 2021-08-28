<template>
  <div class="demo">
    <h1>vue2的响应式原理</h1>
    <div>name: {{ userInfo.name }}</div>
    <div v-text="userInfo.age"></div>
    <div v-if="userInfo.sex">{{ userInfo.sex }}</div>
    <button @click="addSex">添加性别(女)</button>
    <button @click="deleteName">删除姓名</button>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'prodemo',
  setup () {
    let userInfo = reactive({
      name: 'zs',
      age: 20
    })
    const addSex = () => {
      userInfo.sex = 'nv'
    }
    const deleteName = () => {
      delete userInfo.name
    }
    const updateAge = () => {
      userInfo.age = 30
    }
    return {
      userInfo,
      addSex,
      deleteName,
      updateAge
    }
  }
}
</script>
<style scoped>
</style>