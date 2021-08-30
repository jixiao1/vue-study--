<template>
  <div class="CustomRef">
    <h1>customRef 用于自定义一个 ref，可以显式地控制依赖追踪和触发响应，接受一个工厂函数，两个参数分别是用于追踪的 track 
      与用于触发响应的 trigger，并返回一个一个带有 get 和 set 属性的对象</h1>
      <div>
        <input type="text" v-model="KeyWord">
        <h1>{{ KeyWord }}</h1>
      </div>
  </div>
</template>
<script>
// import { ref } from 'vue'
import { customRef } from 'vue'
export default {
  name: 'CustomRef',
  setup () {
    const myref = (value, delay) => {
      let timer
      return customRef((track, trigger) => {
        return {
          get () {
            track() // 追踪  // track 方法放在 get 中，用于提示这个数据是需要追踪变化的
            return value
          },
          set (newValue) {
            console.log(`改变以后的 ${ newValue }`)
            clearTimeout(timer)
            timer = setTimeout(() => {
                value = newValue
                trigger() // vue重新解析模板  // 记得触发事件 trigger,告诉vue触发页面更新
            }, delay)
          }
        }
      })
    }
    let KeyWord = myref('hello', 500)
    return {
      KeyWord
      // myRef
    }
  }
}
</script>
<style scoped>
</style>