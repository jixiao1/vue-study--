<template>
  <div id="app" ref="app">
    <div class="cate_Container">
      <Category :cate="food" msg="美食分类">
        <h1 slot="footer">美食分类的简介</h1>
        <img src="./assets/logo.png" class="cate_img" slot="center"/>
      </Category>
      <Category :cate="game" msg="游戏分类">
        <h1 slot="footer">游戏分类的简介</h1>
        <ul slot="center">
        <li v-for="(item ,index) in game" :key="item+index">
          {{item}}
        </li>
      </ul>
      </Category>
      <Category :cate="films" msg="电影分类">
        <h1 slot="footer">电影分类的简介</h1>
        <video slot="center"  src="./assets/video/2.mp4" controls class="container_video"></video>
      </Category>
    </div>
    <Animate3></Animate3>
    <div>{{ msg }}</div>
    <div v-if="msg1">{{ msg1 }}</div>
    <button @click="clickHandler">拿到msg的信息</button>
    <img src="../src/assets/logo.png" alt="">
    <School ref="school1" 
    :schoolAddress="schoolAddress"
    :school="school"
    :num="num"
    @add="add"/>
    <hr>
    <UserInfo></UserInfo>
    <div>
      <todoHeader :add="addHadner"></todoHeader>
      <TodoList :todo="todo" :delteHandler="delteHandler" :change="change"></TodoList>
    </div>
    <Student :student1="studentHandfler" ref="styu" @click.native="ahaj"></Student>
    <StudentA></StudentA>
    <hr>
    <StudentB></StudentB>
    <publish1></publish1>
    <publish2></publish2>
    <Animate1></Animate1>
    <Animatr2></Animatr2>
  </div>
</template>

<script>
import School from './components/School'
import UserInfo from './components/UserInfo'
import todoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import Student from './components/Student'
import StudentA from './components/StudentA'
import StudentB from './components/StudentB'
import publish1 from './components/Pubsub1'
import publish2 from './components/publish2'
import Animate1 from './components/Animative'
import Animatr2 from './components/AnimateTest2'
import Animate3 from './components/AnimateTest3'
import Category from './components/CateGory'
export default {
  name: 'App',
  components: {
    School,
    UserInfo,
    todoHeader,
    TodoList,
    Student,
    StudentA,
    StudentB,
    publish1,
    publish2,
    Animate1,
    Animatr2,
    Animate3,
    Category
  },
  mounted() {
    
    setTimeout(()=> {
      this.$refs.school1.$on('abc', this.abc)
    }, 1000)
  },
  data () {
    return {
      msg: 'Hello world',
      msg1: '',
      schoolAddress: '北京',
      school: '北京大学',
      num: 10,
      todo: [
      { id: '001', todo: false, name: '吃蛋' },
      { id: '002', todo: false, name: '睡觉' },
      { id: '003', todo: true, name: '睡觉2456' }
    ],
    food: ['海鲜', '鲍鱼', '人参'],
    game: ['三国战纪', '海王', '王者荣耀'],
    films: ['偶像剧', '爱情剧', '武侠剧']
    }
  },
  methods: {
    abc (data, ...abch) {
      console.log("父组件的abc的方法。。。", data, abch)
    },
    ahaj () {
      console.log(222)
    },
    studentHandfler (data) {
      console.log("父组件给子组件传值", data)
    },
    addHadner (val) {
      this.todo.unshift({
        id: Date.now(),
        todo: false,
        name: val
      })
    },
    delteHandler (id) {
      let index = this.todo.findIndex(item => item.id === id);
      this.todo.splice(index, 1)
      
    },
    change (id) {
      // let index = this.todo.findIndex(item => item.id === id);
      // this.todo[index].todo = !this.todo[index].todo
      this.todo.forEach(todo => {
        if (todo.id === id) todo.todo = !todo.todo
      })
    },
    clickHandler () {
      // console.log("@@@")
      console.log(this.$refs.app)
      console.log(document.getElementById("app"))
      console.log(this.$refs.school)
      this.msg1 = this.$refs.school.school
    },
    add (numa) {
      console.log("numa ====", numa)
      this.num++;
    }
  },
}
</script>

<style scoped>
.cate_Container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.cate_img {
  width: 200px;
  height: 200px;
  margin-top: -30px;
}
.container_video {
  width: 300px;
  height: 200px;
     margin-top: -20px;
}
</style>
