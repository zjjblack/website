<template>
  <div id="home">
    <div class="logo">
      <logo :srclogo="LogoImg" imgheight="6vw"/>
    </div>
    <div class="rightfont">
      <font-text margintop="12vh">Hello,My name is Zeng</font-text>
      <font-text margintop="12vh"><div class="title">I'm a Software Beginners</div></font-text>
      <font-text margintop="6vh">With a passion for learning software development and Ps design,</font-text>
      <font-text margintop="5vh">in addition to Japanese learning interests,</font-text>
      <font-text margintop="5vh">this site will always record the state of my life.</font-text>
      <active margintop="10vh" :ActiveText="ActiveTexts"/>
      <font-text margintop="10vh"><div style="color: var(--color-topic)">Welcome to my website</div></font-text>
    </div>
  </div>
</template>

<script>
  import Logo from "../../components/picture/Picture"
  import FontText from "./fonttext/FontText";
  import Active from "./active/Active";

  //图片模块导入进去，在转入子组件
  import LogoImg from '../../assets/img/home/logo.png'
  import ThemeFont from '../../assets/img/home/themefont.png'
  import Subscript from '../../assets/img/home/subscript.png'

  export default {
    name: "Home",
    data(){
      return {
        LogoImg,
        ThemeFont,
        Subscript,

        ActiveTexts: [
          {
            textactive:"Diary",
            textpath:"/diary"
          },
          {
            textactive:"Software",
            textpath:"/software"
          },
          {
            textactive:"Photoshop",
            textpath:"/photoshop"
          },
          {
            textactive:"Japanese",
            textpath:"/japanese"
          }
        ]
      }
    },
    components: {
      Logo,
      FontText,
      Active
    }
  }
</script>

<style scoped>
  #home{
    width: 70vw;
    height: 100vh;
    margin: auto;
  }
  .logo{
    margin-top: 6vh;
    float: left;

  }
  .rightfont{
    float: left;
    margin-left: 10vw;
    font-weight: bold;
    font-size: 1.8vw;
  }
  .title{
    color: var(--color-topic);
    font-size: 3.4vw;
  }
</style>
