<template>
  <div class="School">
    <div>地点： {{ schoolAddress }}</div>
    <div>学校： {{ school }}</div>
    <div>数量： {{ num1 }}</div>
    <div>x: {{x}}</div>
    <div>y: {{y}}</div>
    <button @click="updateNum">改变num</button>
    <button @click="show">改变num2222</button>
    <button @click="emitAbc">触发abc事件</button>
    <button @click="offHandler">解绑</button>
  </div>
</template>
<script>
import { a, moa} from '../mixins/mixins.js'
export default {
  name: 'School',
  components: {},
  data () {
    return {
      // schoolAddress: '北京',
      // school: '北京大学'
      num1: this.num,
      // x: 300,
      // y: 400
    }
  },
  // props: ['school', 'schoolAddress', 'num'],
  // props: {
  //   school: String,
  //   schoolAddress:  String,
  //   num: Number
  // },
  mixins: [a, moa],
  props: {
    school: {
      type: String,
      default: ()=> {
        return ''
      }
    },
    schoolAddress: {
      type: String,
      default: ()=> {
        return ''
      }
    },
    num: {
      type: Number,
      default: ()=> {
        return 1
      }
    }
  },
  methods: {
    updateNum () {
      this.num1++
      this.$emit('add',1911900)
    },
    emitAbc () {
      this.$emit("abc", this.school,1111, 666)
    },
    offHandler () {
      // this.$off('add') //解绑一个自定义事件
      // this.$off(['off', 'abc'])
      this.$off()
    }
  },
    mounted() {
    console.log("mouted加载School")
    console.log(this)
  },
}
</script>
<style scoped>
.School {
  width: 300px;
  height: 200px;
  background: lightblue;
}
</style>