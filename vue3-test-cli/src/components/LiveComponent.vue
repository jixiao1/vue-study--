<template>
 <div class="liveComponent">
   <h1>vue3组合api(生命周期)</h1>
   <div>sum: {{ sum }}</div>
   <button @click="addClickHandler">+1</button>
 </div>
</template>
<script>
//组合api的使用
import { 
  ref, 
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted 
  } from 'vue'
export default {
  name: 'liveComponnet',
  setup () {
    let sum = ref(0)
    let addClickHandler = () => {
      sum.value +=1
    }
    onBeforeMount(() => {
      console.log("onBeforeMounted===")
    })
    onMounted(() => {
      console.log('onMounted=====')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate====');
    })
    onUpdated(()=> {
      console.log('onUpdated=====')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount====');
    })
    onUnmounted(() => {
      console.log('onUnmounted=====');
    })
    return {
      sum,
      addClickHandler
    }
  }
}
</script>
<style scoped>

</style>