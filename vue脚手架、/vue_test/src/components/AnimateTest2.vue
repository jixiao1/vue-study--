<template>
  <div class="Animate2">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello">
     <h1 v-show="!isShow" key="1">开始动画</h1>
     <h1 v-show="isShow" key="2">开始动画111</h1>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'Animate2',
  data () {
    return {
      isShow: true
    }
  }
}
</script>
<style scoped>
.Animate2 {}
h1 {
  background-color: orange;
  transition: all .5s;
}
.hello-enter-active .hello-leave-to{
  transform: translateX(-100%);
}
.hello-leave-active .hello-enter-to {
  transform: translateX(0%);
}
</style>