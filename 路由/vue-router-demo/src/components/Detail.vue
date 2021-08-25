<template>
  <div class="detail">
    detail
    <!-- <div>{{ this.$route.query.id }}</div>
    <div>{{ this.$route.query.title }}</div> -->
    <!-- <div>{{ this.$route.params.id }}</div>
    <div>{{ this.$route.params.title }}</div> -->
     <div>{{ id }}</div>
    <div>{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  props: ['id', 'title'],
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style scoped>
</style>
