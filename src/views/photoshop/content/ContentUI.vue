<template>
  <div>
    <div class="ui">
      <content-top></content-top>
    </div>
    <content-bottom/>

  </div>
</template>

<script>
  import ContentTop from "./ContentTop";
  import ContentBottom from "./ContentBottom";


  export default {
    name: "ContentUI",
    components: {
      ContentTop,
      ContentBottom
    }
  }
</script>

<style scoped>
  .ui{
    margin-top: 8vh;
    width: 100%;
    height: 72vh;
  }
</style>
