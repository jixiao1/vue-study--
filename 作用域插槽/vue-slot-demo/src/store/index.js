import Vue from 'vue'
import Vuex from 'vuex'
import sumInfo from './sumInfo'
import UserInfo from './UserInjfo.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    sumInfo,
    UserInfo
  }
})
