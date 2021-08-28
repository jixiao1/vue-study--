<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>vue3name: {{ name }}</div>
    <div>vue3age: {{ age }}</div>
    <div>vue2name: {{ vue2name }}</div>
    <button @click="sayHello">(vue3中的方法)点击说姓名</button>
    <button @click="sayName">(vue2中的方法)点击说名字</button>
    <hr>
    <RefComponent></RefComponent>
    <hr>
    <ReactveComponent></ReactveComponent>
    <hr>
    <Proxydemoi></Proxydemoi>
  </div>
</template>

<script>
import RefComponent from './components/RefComponent.vue'
import ReactveComponent from './components/ReactiveComponent'
import demo from './components/Progetdemo'
export default {
  name: 'App',
  components: {
    RefComponent,
    ReactveComponent,
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
    function sayHello () {
      console.log(`我叫${name}, 我有${age}岁, 你好啊。。。`)
    }
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>
</style>
