import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.bus = new Vue()

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(vm)
