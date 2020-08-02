import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:'jiaohao'
  },
  mutations: {
    setUname(state,payload){
      state.uname=payload;
    }
  },
  actions: {
    tishi(context,a){
      
    }
  },
  modules: {
  }
})
