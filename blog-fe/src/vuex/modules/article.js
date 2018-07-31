import {
  GET_ARTICLE,
  GET_ARTICLE_FAILURE,
  CLEAR_ARTICLE
} from '../mutation-types'

const state = {
  content: '',
  article: '',
  createdAt: '',
  loading: true
}

const mutations = {
  [GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
    state.createdAt = data.createdAt
  },
  [GET_ARTICLE_FAILURE] (state) {
    return state
  },
  [CLEAR_ARTICLE] (state) {
    state.content = ''
    state.title = ''
    state.createdAt = ''
  }
}

export default {
  state, mutations
}
