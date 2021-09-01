<template>
  <div class="uitop">
    <div class="uitopfont">
      <div class="uitopfonttitle">
        Studio
      </div>
      <div class="uitopfontneiron">
        <div class="uitopfontneiron01">Studio design称为影楼设计</div>
        <div class="uitopfontneiron02">影楼设计是摄影师+设计师两个岗位结合的一个岗位</div>
        <div class="uitopfontneiron02">影楼设计师主要是对影片的后期进行修改处理</div>
      </div>
    </div>
    <img class="uitopimg" :src="Img"/>
  </div>
</template>

<script>
  import Img from "../../../assets/img/phstu/phstu1/one.jpg"
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
  .uitop{
    margin-top: 20vh;
    width: 100%;
    height: 102vh;
  }
  .uitopimg{
    padding-top: 6vh;
    width: 50vw;
    height: 78vh;
    margin: 0 13.2vw;
  }
  .uitopfont{
  }
  .uitopfonttitle{
    text-align: center;
    font-size: 8vh;
    font-weight: bold;
    color: var(--color-topic);
  }
  .uitopfontneiron{
    font-size: 2.8vh;
    margin-top: 2vh;
    margin-right: 0;
    text-align: center;
  }
  .uitopfontneiron02{
    margin-top: 4.4vh;
  }
  .uitopfontneiron01{
    text-align: center;
    margin-top: 4vh;
    font-weight: bold;
  }
</style>
