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
  }
}
</script>
<style>
 .Message {}
</style>
