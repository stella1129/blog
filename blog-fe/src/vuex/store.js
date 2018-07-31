import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import contentList from './modules/contentList'
import article from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    contentList,
    article
  }
})
