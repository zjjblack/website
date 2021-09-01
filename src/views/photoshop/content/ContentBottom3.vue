<template>
  <div class="tupian">

    <div class="tupain01">
      <img :src="Two" class="tupian01img">
    </div>
    <div class="tupain02">
      <img :src="Three" class="tupian01img">
    </div>
  </div>
</template>

<script>

  import Three from "../../../assets/img/advertis/advertis1/three.jpg"
  import Two from "../../../assets/img/advertis/advertis1/two.jpg"

  export default {
    name: "ContentBottom2",
    data(){
      return{
        Three,
        Two
      }
    }
  }
</script>

<style scoped>
  .tupian{
    width: 100%;
    height: 44.02vh;
    margin-top: 12vh;
  }
  .tupain01{
    float: left;
  }
  .tupain02{
    float:right;
  }
  .tupian01img{
    width: 36vw;
    height: 44vh;
  }
</style>
