<template>
  <div class="hello">
    <v-header :msg="msg" :introduce="intro"></v-header>
    <!-- <v-nav></v-nav> -->
    <div>
      <ul class="main-list">
        <li v-for="(item, index) in contentList" :key="index" class="main-item">
          <div class="list-item">
            <div class="list-title">{{item.title}}</div>
            <div class="abstract">{{item.abstract}}</div>
          </div>
          <div class="list-infos">
              <div class="list-author">{{item.author}}</div>
              <!-- 后续需要加过滤器 -->
              <div class="list-created">{{item.createdAt}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/Header.vue'
import vNav from '../components/Nav.vue'
import Vuex from 'vuex'

export default {
  components: {
    vHeader, vNav
  },
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to hello component',
      intro: '行到水穷处，坐看云起时'
    }
  },
  created () {
    console.log('created')
    console.log(this.$store.state)
    this.$store.dispatch('getContentByPage', 1)
  },
  computed: Vuex.mapState({
    contentList: state => state.contentList.contentList
  }),
  mounted () {
    console.log('mounted')
    console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/hello.scss';
</style>
