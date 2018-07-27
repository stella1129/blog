<template>
  <div class="about">
    <div class="pic1"></div>
    <div class="text">
      <p>sweet dream</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'

}
</script>

<style lang="scss">
@import '../sass/_variable.scss';

.pic1 {
  background: url('../assets/2.jpg');
  background-size: 100%;
  display: block;
  width: 100%;
  height:1370 / $ppr;
}
.text {
  p {
    font-size: 72 / $ppr;
    margin-top: 20 / $ppr;
  }
}
</style>
