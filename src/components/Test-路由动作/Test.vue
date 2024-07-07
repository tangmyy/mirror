<template>
  <div id="test">
    <div class="nav-links">
      <router-link class="nav-link" to="/Test/Test/1">测试页面x1</router-link>
      <router-link class="nav-link" to="/Test/Test/2">测试页面x2</router-link>
      <router-link class="nav-link" to="/Test/TestOne">测试页面1</router-link>
      <router-link class="nav-link" to="/Test/TestTwo">测试页面2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'Test',
  components: {   // 组件注册

  },
}
</script>


<style>
#test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 设置顶部外边距 */
  white-space: nowrap; /* 防止换行 */
}

.nav-link {
  margin: 0 15px; /* 设置左右边距 */
  color: #5a5a5a; /* 链接颜色 */
  text-decoration: none; /* 移除下划线 */
}

.nav-link:hover {
  color: #000000; /* 悬停时的链接颜色 */
}
</style>
