import {
  REQUEST_CONTENT_LIST,
  GET_CONTENT_LIST,
  GET_CONTENT_LIST_LENGTH,
  GET_CONTENT_LIST_FAILURE
} from '../mutation-types'

const state = {
  contentList: [],
  isFetching: false,
  curPage: Number // 是个function
}

const mutations = {
  [REQUEST_CONTENT_LIST] (state, page) {
    state.isFetching = true
    state.curPage = page || 1
  },
  [GET_CONTENT_LIST] (state, items) {
    state.isFetching = false
    state.contentList = items
  },
  [GET_CONTENT_LIST_LENGTH] (state, length) {
    state.length = length
  },
  [GET_CONTENT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
