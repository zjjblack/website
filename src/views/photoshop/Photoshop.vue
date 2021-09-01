<template>
  <div id="photoshop">
    <Header text="PhotoShop"/>


    <navigation :navs="daohan"/>

    <content-u-i/>
    <content-el/>
    <content-ad/>
    <content-ph/>

  </div>
</template>

<script>

  import Navigation from "./navigation/Navigation";

  import Header from "../../components/header/Header";

  import ContentUI from "./content/ContentUI";
  import ContentEl from "./content/ContentEl";
  import ContentAd from "./content/ContentAd";
  import ContentPh from "./content/ContentPh";



  export default {
    name: "Photoshop",
    components: {
      Navigation,
      Header,
      ContentUI,
      ContentEl,
      ContentAd,
      ContentPh
    },
    data(){
      return{
        daohan: [
          {
            navtitle: '页面设计',
            path: '/photoshop/ui'
          },
          {
            navtitle: '电商设计',
            path: '/photoshop/ecommerce'
          },
          {
            navtitle: '广告设计',
            path: '/photoshop/advertis'
          },
          {
            navtitle: '影楼设计',
            path: '/photoshop/phstu'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #photoshop{
    width: 76%;
    margin: 0 auto;
  }
</style>
