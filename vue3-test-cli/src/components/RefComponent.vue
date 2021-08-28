<template>
  <div class="Ref_component">
    <div>name: {{ name }}</div>
    <div>age: {{ age }}</div>
    <div>userInfo.type: {{ userInfo.type }}</div>
    <div>userInfo.count: {{ userInfo.count }}</div>
    <button @click="btnClickHandler">vue3中的方法的使用(修改name和age)</button>
    <button @click="btnUpdateUserInfo">修改用户职业</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'RefComponent',
  setup () {
    let name = ref('zs')
    let age = ref(20)
    let userInfo = ref({
      type: '前端工程师',
      count: '30k'
    })
    function btnClickHandler () {
      name.value = 'lisi'
      age.value = 30
    }
    const btnUpdateUserInfo = () => {
      console.log(userInfo.value)
      userInfo.value.type = '后端工程师'
      userInfo.value.count = '50k'
    }
    return {
      age,
      name,
      userInfo,
      btnClickHandler,
      btnUpdateUserInfo
    }
  }
}
</script>
<style scoped>
.Ref_component {}
</style>