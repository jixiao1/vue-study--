const UserInfo = {
  namespaced: true,
  actions: {},
  state: {
    UserList: [{
      id: '001',
      name: '战三'
    }],
    name: '纪霄'
  },
  mutations: {
    addUpload (state, payload) {
      state.UserList.unshift(payload)
    },
    delUpload (state, payload) {
      const index = state.UserList.findIndex(item => item.id === payload)
      state.UserList.splice(index, 1)
    }
  },
  getters: {
    maxName (state) {
      return state.name
    }
  }
}
export default UserInfo
