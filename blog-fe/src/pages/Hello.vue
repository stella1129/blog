<template>
  <div class="hello">
    <v-header :msg="msg" :introduce="intro"></v-header>
    <!-- <v-nav></v-nav> -->
    <h1>{{ msg }}</h1>
    <h2>hello content</h2>
  </div>
</template>

<script>
import vHeader from '../components/Header.vue'
import vNav from '../components/Nav.vue'

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
    this.$store.dispatch('getAllContentList')
  },
  computed: {
    curPage () {
      console.log('test')
      console.log(this.$store.state.contentList)
      return this.$store.state.contentList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
