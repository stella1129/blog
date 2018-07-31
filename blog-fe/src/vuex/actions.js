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
  },
  // 获取文章
  getArticle ({commit}, id) {
    axios.get('/' + 'api/article/' + id)
      .then(res => {
        console.log(res)
        commit(types.GET_ARTICLE, res.data)
      }).catch(err => {
        commit(types.GET_CONTENT_LIST_FAILURE, err)
      })
  },
  // 发布文章
  submitArticle ({commit}, data) {
    axios.post('/' + 'api/article/submitArticle', data)
      .then(res => {
        commit(types.POST_ARTICLE, res.data)
      }).catch(err => {
        commit(types.POST_ARTICLE_FAILURE, err)
      })
  }
}
