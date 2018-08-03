import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/pages/Hello'
import About from '@/pages/About'
import Article from '@/pages/Article'
import Post from '@/pages/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
