<template>
  <div class="emitdemo">
    <div>{{ msg }}</div>
    <div> {{ lop }}</div>
    <button @click="clickHandler">点击</button>
    <slot></slot>
    <slot name="aloa"></slot>
  </div>
</template>
<script>
export default {
  name: 'emitDemo',
  beforeCreate() {
    console.log("beforeCreate ====", 'beforeCreate')
  },
  // props: ['msg', 'lop'],
  attrs: ['msg', 'lop'],
  setup (props, context, c) {
    console.log("setup ====", this)//this 为undefined
    console.log(props, context, c)
    console.log("setup ====", props)
    console.log("setup ====", context.attrs) //相当于vue2中attr
    const clickHandler = () => {
      // console.log(222)
      context.emit('hello', props.msg)
    }
    return {
      clickHandler
    }
  }
}
</script>
<style scoped>
</style>
