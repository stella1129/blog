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
  margin: 0;
  list-style: none;
  display:flex;
  justify-content: flex-end;
  .item {
    padding: 10px;
    text-decoration: none;
    color:#fff;
    &:hover{
      color: #2c3e50;
    }
  }
}
</style>
