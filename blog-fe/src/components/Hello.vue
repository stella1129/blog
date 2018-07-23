<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello content</h2>
  </div>
</template>

<script>

export default {
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
