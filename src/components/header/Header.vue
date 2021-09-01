<template>
  <div class="psnav">
    <div class="psnavleft">
      <logo :srclogo="LogoImg" imgheight="5vh"/>
    </div>
    <div class="psnavright">
      {{this.text}}
    </div>
  </div>
</template>

<script>
  import Logo from "../picture/Picture";

  import LogoImg from "../../assets/img/home/logo.png";

  export default {
    name: "Header",
    data(){
      return{
        LogoImg
      }
    },
    components: {
      Logo
    },
    props: {
      text: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  .psnav{
    width: 100%;
    margin-top: 2vh;
    height: 7vh;
    position: relative;
    border-bottom: 2px solid #999999;
  }
  .psnavleft{
    float: left;
  }
  .psnavright{
    line-height: 1.4;
    font-size: 3.2vh;
    float: right;
    margin-right: 0px;
  }
</style>
