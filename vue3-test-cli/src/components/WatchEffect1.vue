<template>
  <div class="watchEffect">
    <h1>watchEffect的使用</h1>
    <div>sum: {{ sum }}</div>
    <div>person.name: {{ person.name }}</div>
    <div>person.age: {{ person.age }}</div>
    <button @click="addHandler">+1</button>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>
<script>
import { ref, reactive, watchEffect } from 'vue'
export default {
  name: 'WatchEffect11',
  setup () {
    let sum = ref(0)
    let person = reactive({
      name: 'zs',
      age: 20
    })
    const addHandler = () => {
      sum.value +=1
    }
    watchEffect(() => {
      // console.log("数据变换。。。")
      const x = sum.value
      const y = person.name;
      console.log("数据变换。。。", x, y)
    })
    const updateName = () => {
      person.name += '$$'
    }
    const updateAge = () => {
      person.age += 10
    }
    return {
      addHandler,
      updateName,
      updateAge,
      sum,
      person
    }

  }
}
</script>
<style scoped>
</style>