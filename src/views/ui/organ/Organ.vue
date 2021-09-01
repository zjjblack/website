<template>
  <div id="organ">
    <div class="box">
      <!--<button @click="imgMove">点击</button>-->
      <div class="main clearfix" @mouseover="btnOpen" @mouseout="btnHide">
        <div class="minMain">
          <div class="item" v-for="(item,index) in list" :key="index">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <div class="btnMain" v-show="btnShow">
          <div class="left" @click="leftClick">
            <img :src="ljiantou" />
          </div>
          <div class="right" @click="rightClick">
            <img :src="rjiantou" />
          </div>
        </div>
        <div class="pressMain">
          <span v-for="(item,index) in pressList" :class="{active:item.isShow}"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ljiantou from "./img/ljiantou.png"
  import rjiantou from "./img/rjiantou.png"

  import T1 from "../../../assets/img/ui/ui2/08.png"
  import T2 from "../../../assets/img/ui/ui2/05.gif"
  import T3 from "../../../assets/img/ui/ui2/06.jpg"
  import T4 from "../../../assets/img/ui/ui2/five.jpg"
  import T5 from "../../../assets/img/ui/ui2/seven.png"

  export default {
    name: "Organ",
    data() {
      return {
        list: [
          { imgUrl: T1 },
          { imgUrl: T2 },
          { imgUrl: T3 },
          { imgUrl: T4 },
          { imgUrl: T5 }
        ],
        ljiantou,
        rjiantou,
        pressList: [{ name: '1', isShow: false }, { name: '2', isShow: false }, { name: '3', isShow: false }, { name: '4', isShow: false }, { name: '5', isShow: false }],
        numList: ['p0', 'p1', 'p2', 'p3', 'p4'],
        imgIndex: 0,
        imgTimer: null,
        btnShow: false
      }
    },
    mounted: function() {
      var Item = document.getElementsByClassName('item');
      for(var i = 0; i < Item.length; i++) {
        Item[i].className = 'item ' + this.numList[i]
      }
      this.imgMove()
      this.pressList[0].isShow = true
    },
    methods: {

      imgMove() {
        var Item = document.getElementsByClassName('item');
        this.imgTimer = setInterval(() => {
          this.numList.push(this.numList[0]);
          this.numList.shift()
          this.imgIndex++;
          for(var i = 0; i < Item.length; i++) {
            Item[i].className = 'item ' + this.numList[i];
          }
          for(var i in this.pressList) {
            this.pressList[i].isShow = false
          }
          if(this.imgIndex > 4) {
            this.imgIndex = 0
            this.pressList[this.imgIndex].isShow = true;
          } else {
            this.pressList[this.imgIndex].isShow = true;
          }
        }, 15000)
      },
      btnOpen() {
        this.btnShow = true;
        clearInterval(this.imgTimer)
      },
      btnHide() {
        this.btnShow = false;
        this.imgMove()
      },
      leftClick() {
        var Item = document.getElementsByClassName('item');
        this.numList.unshift(this.numList[4]);
        this.numList.pop()
        for(var i = 0; i < Item.length; i++) {
          Item[i].className = 'item ' + this.numList[i];
        }
        for(var i in this.pressList) {
          this.pressList[i].isShow = false
        }
        this.imgIndex--
        if(this.imgIndex < 0) {
          this.imgIndex = 4
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      },
      rightClick() {
        var Item = document.getElementsByClassName('item');
        this.numList.push(this.numList[0]);
        this.numList.shift()
        for(var i = 0; i < Item.length; i++) {
          Item[i].className = 'item ' + this.numList[i];
        }
        for(var i in this.pressList) {
          this.pressList[i].isShow = false
        }
        this.imgIndex++
        if(this.imgIndex > 4) {
          this.imgIndex = 0
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      }
    }
  }
</script>

<style scoped>
  .clearfix:after {
    content: " ";
    display: block;
    clear: both;
  }
  #organ{
    width: 100%;
    margin-top: 18vh;
  }
  .box {
    position: relative;
    width: 100%;
    height: calc(60vh);
    margin: 100px auto;
  }

  .main {
    width: 100%;
    height: calc(60vh);
    top: 0px;
    left: 50%;
  }
  .minMain{
    width: 100%;
    height: calc(60vh);
  }

  .item {
    list-style: none;
    width: 50%;
    height: calc(50vh);
    position: absolute;
    left: 0px;
    transition: all 0.5s ease;
    background-color: #f6f6f6;
  }

  .p0 {
    transform: translate3d(-360px, 0, 0) scale(1);
    opacity: 0;
    z-index: 1;
  }

  .p1 {
    transform: translate3d(0px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 2;
  }

  .p2 {
    transform: translate3d(584px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 3;
  }

  .p3 {
    transform: translate3d(292px, 0, 0) scale(1.5);
    opacity: 1;
    z-index: 4;
  }

  .p4 {
    transform: translate3d(700px, 0, 0) scale(1);
    opacity: 0;
    z-index: 3;
  }

  .newItem {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .changeItem {
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left: -202px;
    transform: scale(1.4);
  }

  .item img {
    margin-left: 12vw;
    width: 15vw;
  }

  .btnMain {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .left {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
  }

  .right {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
  }

  .left img,
  .right img {
    width: 60px;
    height: 60px;
  }

  .pressMain {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 134px;
    height: 24px;
    margin-left: -37px;
    z-index: 20;
  }

  .pressMain span {
    display: inline-block;
    margin: 2px 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(255,255,255,0.53);
    text-align: center;
    line-height: 20px;
  }

  .pressMain .active {
    background: brown;
  }
</style>
