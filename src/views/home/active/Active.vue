<template>
  <div id="active" :style="{marginTop:this.margintop}" >
    <div id="activeitem" v-for="item in ActiveText" @click="itemclick(item.textpath)">
      {{item.textactive}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Active",
    props: {
      margintop: {
        type: String,
        default: "0vh"
      },
      ActiveText:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{
        move: false
      }
    },
    methods: {
      itemclick(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  #active{
    height: 49px;
  }
  #activeitem{
    float: left;
    margin-right: 40px;
    color: var(--color-topic);
    text-align: center;
  }
  #activeitem:hover{
    animation: 2s linear infinite shake;
    font-size: 4.2vh;
  }
</style>
