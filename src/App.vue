<template>
  <div id="app">
    <HelloVueX></HelloVueX>
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="nav-links">
      <router-link class="nav-link" to="/Body">首页</router-link>
      <router-link class="nav-link" to="/Login">登录页面</router-link>
      <router-link class="nav-link" to="/Register">注册页面</router-link>
      <router-link class="nav-link" to="/Table">数据展示页面</router-link>
      <router-link class="nav-link" to="/Test">测试新功能展示页面</router-link>
      <router-link class="nav-link" to="/UpFile">展示页面</router-link>
    </div>
    <router-view></router-view>    <!-- 声明路由占位标签 -->
  </div>
</template>

<script>
import HelloVueX from './components/HelloVueX.vue';

// import { Mock } from '../mock/mock';


export default {
  name: 'App',
  // 生命周期钩子
  mounted:function(){
    console.log("cnm")
  },

  // 组件注册
  components: {
    HelloVueX
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 设置顶部外边距 */
  white-space: nowrap; /* 防止换行 */
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin: 0 15px; /* 设置左右边距 */
  color: #5a5a5a; /* 链接颜色 */
  text-decoration: none; /* 移除下划线 */
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #000000; /* 悬停时的链接颜色 */
  text-decoration: underline;
}
</style>
