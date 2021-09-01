<template>
  <div class="tupian">
    <div class="tupain01">
      <img :src="Four" class="tupian02img">
    </div>

    <div class="tupain01">
      <img :src="Three" class="tupian01img">
    </div>

    <div class="tupain01">
      <img :src="Two" class="tupian02img">
    </div>
  </div>
</template>

<script>

  import Four from "../../../assets/img/ui/ui1/four.jpg"
  import Three from "../../../assets/img/ui/ui1/three.jpg"
  import Two from "../../../assets/img/ui/ui1/two.jpg"

  export default {
    name: "ContentBottom",
    data(){
      return{
        Four,
        Three,
        Two
      }
    }
  }
</script>

<style scoped>
  .tupian{
    width: 100%;
    height: 74vh;
    margin-top: 16vh;
    display: flex;
    text-align: center;
  }
  .tupain01{
    margin: 0 auto;
  }
  .tupian01img{
    width: 22vw;
    height: 74vh;
  }
  .tupian02img{
    margin-top: 6vh;
    width: 18vw;
    height: 64vh;
  }
</style>
