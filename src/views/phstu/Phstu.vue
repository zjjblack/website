<template>
  <div id="Phstu">
    <Header text="Studio Design"/>
    <div class="img01">
      <div class="img01-img">
        <div class="img01-img01">
          <div>修图前</div>
          <img :src="img0101" />
        </div>
        <div class="img01-img02">
          <div>修图后</div>
          <img :src="img0102" />
        </div>
      </div>
    </div>

    <div class="img01" style="margin-top: 10vh">
      <div class="img01-title" style="font-size: 6vh">02</div>
      <div class="img01-img" style="padding-top: 10vh; border-top: 4px solid var(--color-topic)">
        <div class="img01-img01">
          <div>修图前</div>
          <img :src="img0201" />
        </div>
        <div class="img01-img02">
          <div>修图后</div>
          <img :src="img0202" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";

  import img0101 from "../../assets/img/phstu/phstu2/01-01.jpg"
  import img0102 from "../../assets/img/phstu/phstu2/01-02.jpg"
  import img0201 from "../../assets/img/phstu/phstu2/02-01.jpg"
  import img0202 from "../../assets/img/phstu/phstu2/02-02.jpg"

  export default {
    name: "Phstu",
    data(){
      return{
        img0101,
        img0102,
        img0201,
        img0202
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  #Phstu{
    width: 76%;
    margin: 0 auto;
  }
  .img01{
    width: 100%;
    text-align: center;
    font-size: 4vh;
    color: var(--color-topic);
    margin-top: 4vh;
  }
  .img01{
    height: 59.45vh;
  }
  .img01-img01,.img01-img02{
    width: 49%;
    flex: 1;
  }
  .img01-img01 img,.img01-img02 img{
    width: 100%;
    padding-top: 2vh;
  }
  .img01-img01{
    float: left;
  }
  .img01-img02{
    float: right;
  }
</style>
