<template>
  <div class="Father">
    <h1>Father</h1>
    <div>
      <div>name: {{ car.name }}</div>
      <div>price: {{ car.price }}</div>
    </div>
    <Child></Child>
  </div>
</template>
<script>
import { reactive, provide } from 'vue'
import Child from './divChild'
export default {
  name: 'Father',
  components: {
    Child
  },
  setup () {
    let car = reactive({
      name: 'benchi',
      price: 300000
    })
    provide('car', car)
    return {
      car
    }
  }
}
</script>
<style scoped>
.Father {
  height: 30px;
  padding: 10px;
  background-color: red;
}
</style>