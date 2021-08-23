<template>
  <div class="count">
    <div>求和：{{ sum }}</div>
    <div>求和放大10倍：{{ maxNum1 }}</div>
    <div>你学的{{ school }}, 你读的{{ subject }}</div>
    <select name="" id="" v-model.number="n">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="jiaOdd(n)">奇数加1</button>
    <button @click="WATIEadd(n)">等一等</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'count',
  data () {
    return {
      n: 1
    }
  },
  computed: {
    // sum () {
    //   return this.$store.state.sum
    // },
    // maxNum () {
    //   return this.$store.getters.maxNum
    // },
    // school () {
    //   return this.$store.state.school
    // },
    // subject () {
    //   return this.$store.state.subject
    // }
    // 写法一
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' })
    // 写法二
    // ...mapState(['sum', 'school', 'subject'])
    // 写法三
    ...mapState({
      sum: state => state.sum,
      school: state => state.school,
      subject: state => state.subject
    }),
    // ...mapGetters(['maxNum'])
    ...mapGetters({ maxNum1: 'maxNum' })
  },
  methods: {
    // add () {
    //   // this.sum += this.n
    //   this.$store.commit('JIA', this.n)
    // },
    // sub () {
    //   // this.sum -= this.n
    //   this.$store.commit('jian', this.n)
    // },
    ...mapMutations({ add: 'JIA', sub: 'jian' }),
    // ...mapActions({ oddAdd: 'jiaOdd', wriote: 'WATIEadd' })
    ...mapActions(['jiaOdd', 'WATIEadd'])
    // ...mapMutations(['JIA', 'jian']),
    // oddAdd () {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // wriote () {
    //   // setTimeout(() => {
    //   //   this.$store.dispatch('WATIEadd', this.n)
    //   // }, 1000)
    //   this.$store.dispatch('WATIEadd', this.n)
    // }
  },
  mounted () {
    console.log('this ====', this)
  }
}
</script>
<style scoped>
</style>
