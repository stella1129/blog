import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import contentList from './modules/contentList'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    contentList
  }
})
