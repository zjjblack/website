<template>
  <div class="content">
    <div class="content-title">{{title}}</div>
    <div class="content-content">{{content}}<a class="content-data">----日期：{{date}}</a></div>
  </div>
</template>

<script>
  export default {
    name: "Content",
    props: {
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  .content-title{
    font-size: 2.6vh;
    text-align: center;
    padding: 2vh 4vh;
    line-height: 6vh;
    transition: all .3s;
    cursor: pointer;
  }
  .content-title:hover{
    color: var(--color-topic);
    animation: 2s linear infinite shake;
    border-bottom: 0.7vh solid var(--color-topic);
    font-weight: bold;
  }
  .content-content{
    text-align: left;
    padding: 1vh 4vh;
    line-height: 2.4;
    box-shadow: 3px 4px 5px rgba(0,0,0,0.2) inset;
    position: relative;
    transition: .3s ease;
  }
  .content-data{
    display: block;
    float: right;
    margin-right: 2vh;
  }
</style>
