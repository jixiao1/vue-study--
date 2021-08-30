<template>
 <div class="ToRefsDemo">
   <h1>{{ person }}</h1>
   <div>name: {{ name }}</div>
   <div>age: {{ age }}</div>
   <div>sary: {{ job.sary }}</div>
   <button @click="updateName">修改姓名</button>
   <button @click="addAge">添加年龄</button>
   <button @click="addSary">涨工资</button>
 </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ToRefsDemo',
  setup () {
    let person = reactive({
      name: 'zs',
      age: 20,
      job: {
        sary: 3000
      }
    })
    const updateName = () => {
      person.name += '~~~'
    }
    const addAge = () => {
      person.age += 10
    }
    const addSary = () => {
      let { job } = person
      job.sary += 1000
    }
    return {
      person,
      updateName,
      addAge,
      addSary,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>