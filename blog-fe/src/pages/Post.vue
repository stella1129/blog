<template>
  <div class="post">
    <div class="post-title">
      <div class="post-header">
        <input placeholder="请输入题目" class="title-input"/>
        <div class="publish" @click="doSubmit">发布</div>
      </div>
    </div>
    <div class="post-content" >
      <textarea placeholder="请输入内容" class="content-input"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  methods: {
    doSubmit () {
      console.log('enter this')
    }
  }
}
</script>

<style lang="scss">

.post {
  height: 100%;
  position: relative;
  .post-title {
    height: 10%;
    &::after {
      content: ' ';
      width:100%;
      background-color: #000;
      position: absolute;
      left: 0;
      border-bottom: 1px solid #eee;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
    .post-header {
      display: flex;
      justify-content: space-between;
      .title-input {
        display: block;
        border: none;
        height: 200 / $ppr;
        width: 70%;
        padding-left: 102 / $ppr;
        font-size: 72 / $ppr;
      }
      .publish {
        float: right;
        height: 200 / $ppr;
        line-height:200 / $ppr;
        padding: 0 50 / $ppr;
        font-size: 54 / $ppr;
      }
    }

  }
  .post-content {
    height: 90%;
    width: 100%;
    overflow: hidden;
    .content-input {
      display: block;
      padding: 30 / $ppr;
      width: 100%;
      border:none;
      height: 100%;
      font-size: 63 /$ppr;
      padding-top: 50 / $ppr;
    }
  }
}
</style>
