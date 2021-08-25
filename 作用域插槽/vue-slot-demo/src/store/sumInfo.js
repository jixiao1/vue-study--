// import Vuex from 'vuex'
const sumInfo = {
  namespaced: true,
  actions: {
    jiaOdd (store, payload) {
      if (store.state.sum % 2) {
        store.commit('JIA', payload)
      }
    },
    WATIEadd (store, payload) {
      setTimeout(() => {
        store.commit('JIA', payload)
      }, 500)
    }
  },
  state: {
    sum: 999,
    school: '北京大学',
    subject: '软件技术'
  },
  mutations: {
    JIA (state, payload) {
      console.log('mutations的方法被调用了。。。', state, payload)
      state.sum += payload
    },
    jian (state, num) {
      state.sum -= num
    }
  },
  getters: {
    maxNum (state) {
      return state.sum * 10
    }
  }
}
export default sumInfo
