<template>
 <div class="ToRefsDemo">
   <div>name: {{ name }}</div>
   <div>age: {{ age }}</div>
   <hr>
   <Demo1></Demo1>
 </div>
</template>
<script>
import { reactive, toRef } from 'vue'
import Demo1 from './toRefsDemo1'
export default {
  name: 'ToRefsDemo',
  components: {
    Demo1
  },
  setup () {
    let person = reactive({
      name: 'zs',
      age: 20
    })
    let name = toRef(person, 'name')
    let age = toRef(person, 'age')
    return {
      name,
      age
    }
  }
}
</script>

<style scoped>

</style>