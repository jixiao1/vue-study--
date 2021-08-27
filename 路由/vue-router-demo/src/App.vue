<template>
  <div id="app">
   <div class="router_view_show">
     <router-link to="/home" active-class="active" tag="div">home</router-link>
     <router-link to="/about" active-class="active" tag="div">about</router-link>
   </div>
     <router-view></router-view>
   <hr>
   <div>
     <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
     </el-row>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
</style>
