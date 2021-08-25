<template>
  <div class="home">
    <div class="container">
      <router-link active-class="active"  to="/home/news">News</router-link>
      <router-link active-class="active" to="/home/message">Messages</router-link>
    </div>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
</script>
<style>
.home {
  /* display: flex; */
}
.container {
  display: flex;
}
.container a {
  margin: 0 10px;
}
</style>
