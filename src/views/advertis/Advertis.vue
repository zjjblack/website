<template>
<div id="advertis">
  <Header text="Advertis Design"/>
  <div class="img05">
    <img :src="img05">
  </div>
  <div class="img01">
    <div class="img01-title">02</div>
    <div class="img01-img">
      <img class="img01-img01" :src="img0101" />
      <img class="img01-img02" :src="img0102" />
    </div>
  </div>
  <div class="img02">
    <div class="img02-title">03</div>
    <div class="img02-img">
      <img class="img02-img01" :src="img02" />
    </div>
  </div>
  <div class="img02">
    <div class="img02-title">04</div>
    <div class="img02-img">
      <img class="img02-img01" :src="img06" />
    </div>
  </div>
  <div class="img01" style="height: 59vh">
    <div class="img01-title">05</div>
    <div class="img01-img">
      <img class="img01-img01" :src="img0801" />
      <img class="img01-img02" :src="img0802" />
    </div>
  </div>
  <div class="img02">
    <div class="img02-title">06</div>
    <div class="img02-img">
      <img class="img02-img01" :src="img07" />
    </div>
  </div>
</div>
</template>

<script>
  import Header from "../../components/header/Header";

  import img0101 from "../../assets/img/advertis/advertis2/01-01.jpg"
  import img0102 from "../../assets/img/advertis/advertis2/01-02.jpg"
  import img02 from "../../assets/img/advertis/advertis2/02.jpg"
  import img05 from "../../assets/img/advertis/advertis2/05.jpg"
  import img06 from "../../assets/img/advertis/advertis2/06.jpg"
  import img07 from "../../assets/img/advertis/advertis2/07.png"
  import img0801 from "../../assets/img/advertis/advertis2/08-01.jpg"
  import img0802 from "../../assets/img/advertis/advertis2/08-02.jpg"

  export default {
    name: "Advertis",
    components: {Header},
    data(){
      return{
        img0101,
        img0102,
        img02,
        img05,
        img06,
        img07,
        img0801,
        img0802
      }
    }
  }
</script>

<style scoped>
  #advertis{
    width: 76%;
    margin: 0 auto;
  }
  .img01,.img02{
    width: 100%;
    text-align: center;
    font-size: 6vh;
    color: var(--color-topic);
    margin-top: 20vh;
  }
  .img01{
    height: 86vh;
  }
  .img01-img,.img02-img01{
    border-top: 4px solid var(--color-topic);
    padding-top: 20vh;
  }
  .img01-img01,.img01-img02{
    width: 49%;
  }
  .img01 img{
    flex: 1;
  }
  .img01-img01{
    float: left;
  }
  .img01-img02{
    float: right;
  }
  .img05{
    margin-top: 4px;
  }
  .img05 img,.img02 img{
    width: 100%;
  }
</style>
