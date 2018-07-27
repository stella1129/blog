import * as types from './mutation-types'
import axios from 'axios'

// axios.defualts.headers.post['Cnotent-type'] = 'application/x-www-form-urlencoded'

export default {
  // 获取文章列表, 现仅返回所有文章的数量
  getAllContentList ({commit}) {
    commit(types.REQUEST_CONTENT_LIST)
    axios.get('/' + 'api/contentAll').then(response => {
      commit(types.GET_CONTENT_LIST_LENGTH, response.data.listLength)
    }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  },
  getContentByPage ({commit}, page) {
    commit(types.REQUEST_CONTENT_LIST, page)
    axios.get('/' + 'api/contentList/' + page).then(
      res => {
        // console.log(res.data) // {page:,data:}
        commit(types.GET_CONTENT_LIST, res.data.data)
      }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  }
}
