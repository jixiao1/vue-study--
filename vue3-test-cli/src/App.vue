<template>
  <div>
    <div v-if="false">
       <div>vue3name: {{ name }}</div>
      <div>vue3age: {{ age }}</div>
      <div>vue2name: {{ vue2name }}</div>
      <div v-if="sonValue">{{ sonValue }}</div>
      <button @click="sayHello">(vue3中的方法)点击说姓名</button>
      <button @click="sayName">(vue2中的方法)点击说名字</button>
      <hr>
      <RefComponent></RefComponent>
      <hr>
      <ReactveComponent></ReactveComponent>
      <hr>
      <Proxydemoi></Proxydemoi>
      <hr>
      <EmitDemo msg="123" lop="lop" @hello="helloClick">
        <div>匿名插槽</div>
        <template v-slot:aloa>
          <div>
            具名插槽
          </div>
        </template>
      </EmitDemo>
      <hr>
      <ComputedDemo></ComputedDemo>
      <hr>
      <WatchDemo></WatchDemo>
      <hr>
      <watchEffect1></watchEffect1>
      <hr>
      <button @click="isShoiw">show/hide</button>
      <div v-if="isShow">
        <liveComponent1></liveComponent1>
      </div>
      <hr>
      <div>
        <Sumdemo></Sumdemo>
      </div>
      <hr>
      <Test></Test>
      <hr>
    </div>
    <ToRefsDemo></ToRefsDemo>
    <hr>
    <ToRAW1></ToRAW1>
  </div>
</template>

<script>
import RefComponent from './components/RefComponent.vue'
import ReactveComponent from './components/ReactiveComponent'
import demo from './components/Progetdemo'
import EmitDemo from './components/EmitDemo'
import ComputedDemo from './components/ComputedDemo'
import WatchDemo from './components/WatchDemo'
import watchEffect1 from './components/WatchEffect1'
import liveComponent1 from './components/LiveComponent'
import Sumdemo from './components/SumDemo'
import Test from './components/Test'
import ToRefsDemo from  './components/ToRefsDemo'
import ToRAW1 from './components/toRaw'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    RefComponent,
    ReactveComponent,
    EmitDemo,
    ComputedDemo,
    WatchDemo,
    watchEffect1,
    liveComponent1,
    Sumdemo,
    ToRefsDemo,
    Test,
    ToRAW1,
    'Proxydemoi': demo
  },
  data () {
    return {
      vue2name: 'vue2name'
    }
  },
  methods: {
    sayName () {
      console.log(`vue2中的方法${this.vue2name}`)
    }
  },
  setup () {
    let name = '张三'
    let age = 20
    let sonValue = ref(0)
    let isShow = ref(true)
    const isShoiw = () => {
      isShow.value = !isShow.value
    }
    function sayHello () {
      console.log(`我叫${name}, 我有${age}岁, 你好啊。。。`)
    }
    const helloClick = (data) => {
      console.log("我是父组件的自定义事件。。。", data)
      sonValue.value = data
    }
    return {
      name,
      age,
      sayHello,
      helloClick,
      sonValue,
      isShow,
      isShoiw
    }
  }
}
</script>

<style>
</style>
