<template>
  <div class="navs">
    <ul class="nav">
      <li><router-link class="item" :to="{name: 'Hello'}">首页</router-link></li>
      <li><router-link class="item" :to="{name:'About'}">关于</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.nav {
  list-style: none;
  display:flex;
  justify-content: flex-end;
  .item {
    width: 45px;
    padding: 10px;
  }
}
</style>
