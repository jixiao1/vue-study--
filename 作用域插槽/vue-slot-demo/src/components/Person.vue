<template>
<div class="Person">
  <h1>人物列表</h1>
  <input type="text" placeholder="请输入你的姓名" v-model="name">
  <button @click="addPerson()">添加人物</button>
  <ul>
    <li v-for="p in UserList" :key="String(p.id)">
      {{p.name}}
      <button @click="delUpload(String(p.id))">删除</button>
    </li>
  </ul>
  <!-- <div>上面的求和是： {{ this.$store.state.sum }}</div> -->
  <!-- <div>上面的求和是： {{ sum1 }}</div> -->
    <div>上面的求和是： {{ sum }}</div>
    <div>上面的求和是： {{ sum2 }}</div>
    <div>{{this.$store.getters['UserInfo/maxName']}}</div>
    <div>{{ maxName }} </div>
     <div>{{ maxName1 }} </div>
</div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Person',
  data () {
    return {
      name: '',
      userInfo: { id: Date.now(), name: this.name }
    }
  },
  computed: {
    // UserList () {
    //   return this.$store.state.UserList
    // }
    // ...mapState({
    //   UserList: state => state.UserList,
    //   sum1: state => state.sum
    // }),
    ...mapState('UserInfo', ['UserList']),
    ...mapState('sumInfo', ['sum']),
    maxName1 () {
      return this.$store.getters['UserInfo/maxName']
    },
    sum2 () {
      return this.$store.state.sumInfo.sum
    },
    ...mapGetters('UserInfo', ['maxName'])
  },
  methods: {
    addPerson () {
      if (this.name) {
        const userInfo = { id: new Date(), name: this.name }
        this.$store.commit('UserInfo/addUpload', userInfo)
        this.name = ''
      }
    },
    // delUpload (id) {
    //   console.log(id)
    //   this.$store.commit('delUpload', id)
    // }
    // ...mapMutations({ delUpload: 'delUpload' })
    ...mapMutations('UserInfo', ['delUpload'])
  }
}
</script>
<style scoped>

</style>
