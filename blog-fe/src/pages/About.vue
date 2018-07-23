<template>
  <div class="about">
    <i class="pic1"></i>
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
  background: url('../assets/pic1.jpg');
  display: block;
  width: 100%;
  height:800 / $ppr;
}
</style>
