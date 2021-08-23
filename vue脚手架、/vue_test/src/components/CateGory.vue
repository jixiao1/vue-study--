<template>
  <div class="Category">
    <h1>{{ msg }}</h1>
    <slot>默认传入的值</slot>
    <slot name="center">center的x插槽</slot>
    <slot name="footer">footer的插槽</slot>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data () {
    return {}
  },
  props: ['cate', 'msg']
}
</script>
<style scoped>
.Category {
  width: 300px;
  height: 300px;
  background-color: lightblue;
  margin: 0 20px;
}
</style>