<template>
  <div id="japanese">
    <Header text="Janpanse"/>
    <div class="content">
      <div>JLPT--N4</div>
      <img :src="Japanese">
    </div>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";

  import Japanese from "../../assets/img/japanese/jlpt.jpg"

  export default {
    name: "Japanese",
    data(){
      return{
        Japanese
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  #japanese{
    width: 76%;
    margin: 0 auto;
    text-align: center;
    font-size: 6vh;
  }
  img{
    width: 60%;
  }
  .content{
    margin-top: 3vh;
  }
</style>
