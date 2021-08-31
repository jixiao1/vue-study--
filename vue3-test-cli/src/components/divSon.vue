<template>
  <div class="Son">
    <h1>son</h1>
    <button @click="isShow = true">打开弹窗</button>
    <teleport to='body'>
       <div class="mask" v-if="isShow">
      <div class="tanchuang">
      <divDialog>
        <button @click="isShow = false" class="close">关闭弹窗</button>
      </divDialog>
    </div>
    </div>
  </teleport>
  <div>
    <Suspense>
      <template v-slot:default>
          <demo></demo>
      </template>
      <template v-slot:fallback>
        <h3>加载中。。。</h3>
     </template>
    </Suspense>
  </div>
  </div>
</template>
<script>
import { inject, ref, defineAsyncComponent }  from 'vue'
const demo = defineAsyncComponent(() => import('./SuperDemo'))
import divDialog  from './divDialog'
export default {
  name: 'son',
  components: {
    divDialog,
    demo
  },
  setup () {
    let x1 = inject('car')
    let isShow = ref(false)
    console.log("x111=====", x1)
    return {
      x1,
      isShow
    }
  }
}
</script>
<style scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.tanchuang {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>