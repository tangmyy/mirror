<template>
    <div>
        <h1>测试页面1,维护中...</h1>
        <h1>{{ title }}</h1>
        <span>{{ rating }}</span>
        <button @click="fun">点击收藏</button>
        <p>已点击收藏 {{ favoritesCount }} 次</p>
    </div>
  </template>


<script>
  export default {
    name:"Movie",   // 基本无用
    props:["title","rating"],
    data:function (){
      return {
        favoritesCount: 0 // 定义局部数据状态
      };
    },
    methods:{
      fun(){
        this.favoritesCount++;
        alert("已加入收藏！")
      }
    }
  }

</script>