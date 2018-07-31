<template>
  <div class="headers">
    <v-nav></v-nav>
    <div class="detail">
      <p class="name">{{msg}}</p>
      <p class="intro">{{introduce}}</p>
    </div>
  </div>
</template>

<script>
import vNav from './Nav.vue'

export default {
  components: {
    vNav
  },
  props: {
    msg: String,
    introduce: String
  }
}
</script>

<style lang="scss">
@import '../sass/_variable.scss';

p{
  padding: 0;
  margin: 0;
}
.headers {
  background: url('../assets/pic1.jpg');
  background-size: 100%;
  width:100%;
  height:500 / $ppr;
  .detail {
    color:#fff;
    margin-top:72 / $ppr;
    .name{
      font-size: 72 / $ppr;
      padding:20 / $ppr;
    }
    .intro {
      font-size:54 / $ppr;
    }
  }
}
</style>
