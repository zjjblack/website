<template>
  <div>
    <img :src="srclogo" :style="imgsize">
  </div>
</template>

<script>

  export default {
    name: "Picture",
    props: {
      srclogo: {
        type: String,
        default: ""
      },
      imgwidth: {
        type: String,
        default: "auto"
      },
      imgheight: {
        type: String,
        default: "auto"
      }
    },
    computed: {
      imgsize(){
        if(this.imgwidth!="auto"){
          return {width:this.imgwidth}
        }
        else if(this.imgheight!="auto"){
          return {height:this.imgheight}
        }
      }
    }
  }
</script>

<style scoped>

</style>
