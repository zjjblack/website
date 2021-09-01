<template>
  <div>
    <div class="top2">
      <content-top2/>
    </div>
    <content-bottom2/>
  </div>
</template>

<script>
  import ContentTop2 from "./ContentTop2";
  import ContentBottom2 from "./ContentBottom2";

  export default {
    name: "ContentEl",
    components: {
      ContentTop2,
      ContentBottom2
    }
  }
</script>

<style scoped>
  .top2{
    margin-top: 20vh;
    width: 100%;
    height: 72vh;
  }
</style>
