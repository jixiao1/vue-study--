<template>
  <div class="Ref_component">
    <div>name: {{ p.name }}</div>
    <div>age: {{ p.age }}</div>
    <div>userInfo.type: {{ p.userInfo.type }}</div>
    <div>userInfo.count: {{ p.userInfo.count }}</div>
    <div>c: {{ p.userInfo.a.b.c }}</div>
    <button @click="btnClickHandler">vue3中的方法的使用(修改name和age)</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'ReactiveComponent',
  setup () {
    // let name = ref('zs')
    // let age = ref(20)
    // let userInfo = reactive({
    //   type: '前端工程师',
    //   count: '30k',
    //   a: {
    //     b: {
    //       c: 12
    //     }
    //   }
    // })
    let p = reactive({
      name: 'zs',
      age: 20,
      userInfo: {
        type: '前端工程师',
        count: '30k',
        a: {
          b: {
            c: 12
          }
        } 
      }
    })
    function btnClickHandler () {
      p.name = 'lisi'
      p.age = 30
      p.userInfo.type = 'UI工程师'
      p.userInfo.count = '55k'
      p.userInfo.a.b.c = 99
      // name.value = 'lisi'
      // age.value = 30
    }
    return {
      // age,
      // name,
      // userInfo,
      p,
      btnClickHandler
    }
  }
}
</script>
<style scoped>
.Ref_component {}
</style>