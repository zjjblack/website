<template>
  <div id="ui">
    <Header text="UI Design"/>

    <organ/>


  </div>
</template>

<script>
  import LogoImg from "../../assets/img/home/logo.png";

  import Header from "../../components/header/Header";

  import Organ from "./organ/Organ";

  import Img08 from "../../assets/img/ui/ui2/08.png"


  export default {
    name: "UI",
    data(){
      return{
        LogoImg,
        Img08
      }
    },
    components: {
      Header,
      Organ
    }
  }
</script>

<style scoped>
  #ui{
    width: 76%;
    margin: 0 auto;
  }
</style>
