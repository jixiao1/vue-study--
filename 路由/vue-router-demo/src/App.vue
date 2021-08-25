<template>
  <div id="app">
   <div class="router_view_show">
     <router-link to="/home" active-class="active" tag="div">home</router-link>
     <router-link to="/about" active-class="active" tag="div">about</router-link>
   </div>
   <div>
     <router-view></router-view>
   </div>
   <hr>
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
.router_view_show {
  display: flex;
}
.router_view_show a {
  width: 200px;
  height: 100px;
  color: red;
}
.router_view_show .active {
  background-color: lightblue;
  color: black;
  text-align: center;
  line-height: 100px;
  text-decoration: none;
}
</style>
