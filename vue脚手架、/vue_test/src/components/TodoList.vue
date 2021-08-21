<template>
  <div class="TodoList">
    <ul class="todoUl">
      <li v-for="(item ,index) in todo" :key="item+index" class="todoLi">
        <input type="checkbox" :checked="item.todo" @change="changeHandelr(item.id, item.todo)"/>
        <span>{{ item.name }}</span>
        <button class="btn" @click="deteleClick(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
    }
  },
  props: ['todo', 'delteHandler', 'change'],
  methods: {
    deteleClick(id) {
      this.delteHandler(id)
    },
    changeHandelr (id, todo) {
      this.change(id)
      console.log(id, todo)
    }
  },
}
</script>
<style scoped>
.TodoList {}
.todoUl {}
.todoLi {}
.todoLi .btn {
  width: 100%;
  display: none;
}
.todoLi:hover .btn {
  display: block;
}

</style>