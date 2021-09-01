<template>
  <div class="uitop">
    <img class="uitopimg" :src="Img"/>
    <div class="uitopfont">
      <div class="uitopfonttitle">
        Advertisement
      </div>
      <div class="uitopfontneiron">
        <div class="uitopfontneiron01">Advertisement称为广告设计</div>
        <div class="uitopfontneiron02">基于计算机平面设计技术应用的基础</div>
        <div class="uitopfontneiron02">利用图象、文字、色彩、版面、图形等表达广告的元素</div>
        <div class="uitopfontneiron03">结合广告媒体的使用特征</div>
        <div class="uitopfontneiron03">为实现表达广告目的和意图</div>
        <div class="uitopfontneiron03">所进行平面艺术创意的一种设计活动或过程</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Img from "../../../assets/img/advertis/advertis1/one.jpg"
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
