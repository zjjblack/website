<template>
  <div>
    <div class="top2">
      <content-top3/>
    </div>
    <content-bottom3/>
  </div>
</template>

<script>
  import ContentTop3 from "./ContentTop3";
  import ContentBottom3 from "./ContentBottom3";

  export default {
    name: "ContentAd",
    components: {
      ContentTop3,
      ContentBottom3
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
