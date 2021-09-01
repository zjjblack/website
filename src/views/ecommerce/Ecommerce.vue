<template>
  <div id="Ecommerce">
    <Header text="Electricity Design"/>
    <div>
      <img :src="img01">
      <div style="text-align: center; font-size: 6vh; color: var(--color-topic); margin-top: 20vh">02</div>
      <img :src="img02" style=" padding-top: 20vh; border-top: 4px solid var(--color-topic)">
    </div>
  </div>
</template>

<script>
  import img01 from "../../assets/img/emcommerce/emcommerce2/01.jpg"
  import img02 from "../../assets/img/emcommerce/emcommerce2/02.jpg"

  import Header from "../../components/header/Header";

  export default {
    name: "Ecommerce",
    data(){
      return{
        img01,
        img02
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  #Ecommerce{
    width: 76%;
    margin: 0 auto;
  }
  img{
    width: 100%;
  }
</style>
