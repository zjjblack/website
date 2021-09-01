<template>
  <div id="fonttext" :style="{marginTop:this.margintop}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FontText",
    props: {
      margintop: {
        type: String,
        default: "0vh"
      }
    }
  }
</script>

<style scoped>
</style>
