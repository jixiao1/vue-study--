<template>
  <div class="Animate1">
    <button @click="isShow=!isShow">动画</button>
    <transition name="hello" :appear="true">
      <div class="Show" v-show="isShow">动画</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Animate1',
  data() {
    return {
      isShow: true
    }
  },
}
</script>
<style scoped>
.Animate1 {
  
}
.Show {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: orange;
  }
  /* .come {
    animation: com linear 2s;
  }
  .go {
    animation: com linear 2s reverse;
  } */
  .hello-enter-active {
    animation: com linear 2s;
  }
  .hello-leave-active {
    animation: com linear 2s reverse;
  }
  @keyframes com {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
</style>