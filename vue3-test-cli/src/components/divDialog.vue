<template>
  <div class="divDialog">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'divDialog',
  setup () {}
}
</script>
<style scoped>
.divDialog {
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>
