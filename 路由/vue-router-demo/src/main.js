import Vue from 'vue'
// 全局使用Element ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Row } from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
