<template>
  <div class="Message">
     Messages
     <div>
       <div v-for="item in list" :key="item.id">
         <!-- query 传递参数-->
        <!-- <router-link
         :to="{
           path: '/home/message/detail',
           query: {
             id: item.id,
             title: item.title
           }
         }" >{{item.title}}</router-link> -->
         <!-- params传递参数 -->
          <!-- <router-link
         :to='`/home/message/detail/${item.id}/${item.title}`'>{{item.title}}</router-link> -->
          <router-link :to="{
            name: 'detail',
            query:{
              id: item.id,
              title: item.title
            }
          }">{{item.title}}</router-link>
          <button @click="pushShow(item)">push</button>
          <button @click="replaceShow(item)">replaceShow</button>
          <button @click="goClick">go</button>
          <button @click="backClick">back</button>
       </div>
     </div>
     <hr>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      list: [
        { id: '0001', title: '标题1' },
        { id: '0002', title: '标题2' }
      ]
    }
  },
  methods: {
    pushShow (item) {
      this.$router.push(
        {
          name: 'detail',
          query: {
            id: item.id,
            title: item.title
          }
        }
      )
    },
    replaceShow (item) {
      this.$router.replace(
        {
          name: 'detail',
          query: {
            id: item.id,
            title: item.title
          }
        }
      )
    },
    goClick () {
      this.$router.go(1)
    },
    backClick () {
      this.$router.back()
    }
  },
  beforeDestroy () {
    console.log('message组件被销毁了....')
  }
}
</script>
<style>
 .Message {}
</style>
