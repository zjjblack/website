<template>
  <div id="navitem">
    <div class="psdaohanitem" v-for="item in navs" @click="itemclick(item.path)">
      {{item.navtitle}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    props: {
      navs: {
        type: Array,
        default: []
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
  .psdaohanitem{
    padding-top: 4vh;
    flex: 1;
  }
  .psdaohanitem:hover{
    color: var(--color-topic);
  }
  #navitem{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 2.6vh;
  }
</style>
