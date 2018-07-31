<template>
  <div>
    hello article
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$route.params)
    this.$store.dispatch('getArticle', this.$route.params.id)
  }
}
</script>
>
