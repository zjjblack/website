<template>
  <div class="uitop">
    <img class="uitopimg" :src="Img"/>
    <div class="uitopfont">
      <div class="uitopfonttitle">
        UI
      </div>
      <div class="uitopfontneiron">
        <div class="uitopfontneiron01">UI设计称为界面设计</div>
        <div class="uitopfontneiron02">是指对软件的人机交互、操作逻辑、界面美观的整体设计</div>
        <div class="uitopfontneiron02">UI设计分为实体UI和虚拟UI，互联网常用的UI设计是虚拟UI</div>
        <div class="uitopfontneiron02">UI即User Interface(用户界面)的简称</div>
        <div class="uitopfontneiron03">UI设计不仅是让软件变得有个性有品位</div>
        <div class="uitopfontneiron04">还要让软件的操作变得舒适简单、自由，充分体现软件的定位和特点</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Img from "../../../assets/img/ui/ui1/seven.jpg"
  export default {
    name: "ContentTop",
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
    float: left;
  }
  .uitopfont{
    float: left;
    margin-left: 6vw;
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
  .uitopfontneiron04{
    margin-top: 4vh;
    font-size: 2.4vh;
  }
</style>
