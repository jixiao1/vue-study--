<template>
  <div class="watchDemo">
    <h2>vue2和vue3中watch的使用</h2>
    <div>
      <div>求和：{{ sum }}</div>
      <div>msg: {{ msg }}</div>
      <div>姓名： {{ person.name }}</div>
      <div>年龄： {{ person.age }}</div>
      <div>薪资：{{ person.job.sary + 'k' }}</div>
      <button @click="updateHandler">修改msg</button>
      <button @click="addHandler">+1</button>
      <button @click="updateName">修改姓名</button>
      <button @click="addAge">添加年龄</button>
      <button @click="addSary">涨薪资</button>
    </div>
  </div>
</template>
<script>
import { ref, watch, reactive } from 'vue'
export default {
  name: 'watchDemo',
  // watch: {
  //   sum (newValue, oldValue) {
  //     console.log("sum的数值的变换.....", newValue, oldValue);
  //   }
  // },
  // watch: {
  //   sum: {
  //     handler (newvak, old) {
  //       console.log(newvak, old)
  //     },
  //     immediate: true, //立即监听
  //     deep: true // 深度监听
  //   }
  // },
  setup () {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: 'zs',
      age: 20,
      job: {
        sary: 20
      }
    })
    const addHandler = () => {
      sum.value+=1
    }
    const updateHandler = () => {
      msg.value += '~~'
    }
    const updateName = () => {
      person.name = 'lisi'
    }
    const addAge = () => {
      person.age += 10
    }
    const addSary = () => {
      person.job.sary += 10
    }
    // 监听ref单一值的变化
    // watch(sum, (newvAL, oLdVal) => {
    //   console.log(newvAL, oLdVal)
    // })
    // watch(msg, (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })
    // 监听ref多个值的变化
    watch([msg, sum], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    // 监听reactive中的person对象
    // 注意： 此处无法正确获取OldVal的变化
    // 此时开始深度监听无用
    watch(person, (newVal, oldVal)=> {
      console.log(newVal, oldVal)
    }, {deep: true})
    // 写法四：
    // 监听reactive对象中一个属性的变化
    watch(() =>person.name, (newVal, oldVal)=> {
      console.log(newVal, oldVal)
    })
    //   watch([() =>person.name], (newVal, oldVal)=> {
    //   console.log(newVal, oldVal)
    // })
      watch([() =>person.name, ()=> person.age], (newVal, oldVal)=> {
      console.log(newVal, oldVal)
    })
    watch([() => person.job], (newVal, oldVak) => {
      console.log(newVal, oldVak)
    }, {deep: true})
    return {
      sum,
      person,
      addHandler,
      updateHandler,
      msg,
      addAge,
      addSary,
      updateName
    }
  }
}
</script>
<style scoped>
</style>