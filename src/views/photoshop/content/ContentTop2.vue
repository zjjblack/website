<template>
  <div class="uitop">
    <img class="uitopimg" :src="Img"/>
    <div class="uitopfont">
      <div class="uitopfonttitle">
        Electricity
      </div>
      <div class="uitopfontneiron">
        <div class="uitopfontneiron01">Electricity称为电商设计</div>
        <div class="uitopfontneiron02">为网页设计 + 平面设计的组合</div>
        <div class="uitopfontneiron02">利用用户体验和人机交互的概念，通过互联网传播，实现销售商品</div>
        <div class="uitopfontneiron03">除了所有与平面设计和网页设计相关的设计知识外</div>
        <div class="uitopfontneiron03">它还涉及销售知识、用户心理、用户体验、操作、交互等知识</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Img from "../../../assets/img/emcommerce/emcommerce1/one.jpg"
  export default {
    name: "ContentTop2",
    data(){
      return{
        Img
      }
    }
  }
</script>

<style scoped>
  .uitopimg{
    width: 34vw;
    height: 72vh;
    float: right;
  }
  .uitopfont{
    float: left;
  }
  .uitopfonttitle{
    text-align: center;
    margin-right: 0;
    font-size: 8vh;
    font-weight: bold;
    color: var(--color-topic);
  }
  .uitopfontneiron{
    font-size: 2.8vh;
    margin-top: 2vh;
    margin-right: 0;
    text-align: left;
  }
  .uitopfontneiron02{
    margin-top: 4.4vh;
  }
  .uitopfontneiron01{
    text-align: center;
    margin-top: 4vh;
    font-weight: bold;
  }
  .uitopfontneiron03{
    margin-top: 5vh;
    font-size: 2.4vh;
  }
</style>
