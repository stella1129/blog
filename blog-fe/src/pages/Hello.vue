<template>
  <div class="hello">
    <v-header></v-header>
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
      msg: 'Welcome to hello component'
    }
  },
  created () {
    console.log('here')
    console.log(this.$store)
    this.$store.dispatch('getAllContentList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
