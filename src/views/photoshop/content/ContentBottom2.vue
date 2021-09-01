<template>
  <div class="tupian">

    <div class="tupain01">
      <img :src="Two" class="tupian01img">
    </div>

    <div class="tupain02">
      <div class="font">
        <div class="font01">Logo</div>
        <div class="font02">标识，标志，徽标</div>
        <div class="font03">a printed design or symbol</div>
        <div class="font04">that a company or an organization uses as its special sign</div>
  </div>
      <img :src="Three" class="tupian02img">
    </div>
  </div>
</template>

<script>

  import Three from "../../../assets/img/emcommerce/emcommerce1/three.jpg"
  import Two from "../../../assets/img/emcommerce/emcommerce1/two.jpg"

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
    height: 74vh;
    margin-top: 16vh;
  }
  .tupain01{
    float: left;
  }
  .tupain02{
    float:right;
    /*margin-top: 32.45vh;*/
  }
  .tupian01img{
    width: 34vw;
    height: 74vh;
  }
  .tupian02img{
    margin-top: 4vh;
    width: 36vw;
    height: 47vh;
  }
  .font{
    margin-top: 1vh;
  }
  .font01{
    font-size: 5vh;
    color: var(--color-topic);
  }
  .font02{
    margin-top: 2.6vh;
    font-size: 2.8vh;
    font-weight: bold;
  }
  .font03{
    margin-top: 2vh;
    font-size: 2.6vh;
  }
  .font04{
    margin-top: 1vh;
    font-size: 2.6vh;
  }
</style>
