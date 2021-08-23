<template>
  <div class="AnimateTest3">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <button @click="clickHandler">点击</button>
    <transition-group
    name="animate__animated animate__bounce"
    :appear="true"
    enter-active-class="animate__backInDown"
    leave-active-class="animate__backOutDown">
     <h1 v-show="isShow" key="1">你真的很好</h1>
     <div v-show="!isShow" key="2">加油呀！！</div>
    </transition-group>
  </div>
</template>
<script>
import 'animate.css'
import axios from 'axios'
export default {
  name: 'AnimateTest3',
  data () {
    return {
      isShow: true
    }
  },
  methods:{
    clickHandler () {
      let url = '/api/ajax/movieOnInfoList'
      axios.get(url).then(res => {
        console.log(res)
        let { movieList } = res.data
        console.log(movieList)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.AnimateTest3 {}
</style>