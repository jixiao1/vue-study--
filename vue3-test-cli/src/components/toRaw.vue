<template>
  <div class="toRaw">
    <h1>人物信息</h1>
    <div>name: {{ person.name }}</div>
    <div>age: {{ person.age }}</div>
    <div>num: {{ num }}</div>
    <button @click="person.name+='--'">修改name</button>
    <button @click="person.num += 10">加10</button>
  </div>
</template>
<script>
// import { reactive, readonly, toRef } from 'vue'
import { reactive, toRaw } from 'vue'
export default {
  name: 'toRaw1',
  setup() {
    let person = reactive({
      name: 'jixiao',
      age: 20
    })
    // person = readonly(person)
    // let name = toRef(person, 'name')
    // let age = toRef(person, 'age')
    // person.num = 10;
    // let num = toRef(person, 'num')
    // toRaw使数据不再是响应式的
    person = toRaw(person)
    person.num = 10
    console.log("person ===", person)
    return {
      person
      // name,
      // age,
      // num
    }
  }
}
</script>
<style scoped>
</style>