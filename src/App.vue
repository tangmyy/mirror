<template>
  <div>
    <!-- 首页导航栏 -->
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="图片被臭冥冥吃了"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <router-link class="new" to="/HelloVueX">
          <b-navbar-item>
            首页
          </b-navbar-item>
        </router-link>
        
        <router-link class="new" to="/UpFile">
          <b-navbar-item>
            上传图片
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/Table">
          <b-navbar-item>
            数据展示
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/Test/Test">
          <b-navbar-item>
            测试页面
          </b-navbar-item>
        </router-link>

        <!-- <b-navbar-dropdown label="其他">
          <b-navbar-item href="#">
            数据展示
          </b-navbar-item>
          <b-navbar-item href="#">
            测试
          </b-navbar-item>
        </b-navbar-dropdown> -->
      </template>
      
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light">
              <router-link to="/Login">登录</router-link>
            </a>

            <router-link to="/Register">
            <a class="button is-primary">
              <strong>
                注册
              </strong>
            </a>
            </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>  
    <!-- 中间内容 -->
    <template>
      <div id="app">
        <router-view></router-view>    
      </div>
    </template>

    <!-- 页码导航栏 -->
    <section>
      <hr>
      <b-pagination
      :total="total"
      v-model="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
      :page-input-position="inputPosition"
      :debounce-page-input="inputDebounce"
      />
    </section>
    <hr>

  </div>
</template>


<script>
// import { Mock } from '../mock/mock';
import HelloVueX from './components/HelloVueX.vue';
export default {
  name: 'App',
  components: {   // 组件注册
    HelloVueX
  },
  data() {
    return {
      total: 200,     // 总记录数
      current: 1,     // 当前页数
      perPage: 10,    // 每页记录数
      rangeBefore: 2, // 前面有几页
      rangeAfter: 2,  // 后面有几页
      order: 'is-centered',      // 升序或降序    is-right
      size: 'is-medium',       // 组件的大小  is-small is-medium   is-large
      isSimple: false,    // 简化模式
      isRounded: true,   // 圆角样式
      hasInput: true,    // 页码输入框
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      inputPosition: '',    // 页码输入框的位置
      inputDebounce: '500'   // 页码输入的防抖时间
    }
  }
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

.new {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中，可选 */
}


/* <router-link class="nav-link" to="/UpFile">展示页面</router-link> */
/* .nav-links {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 设置顶部外边距 */
  /* white-space: nowrap; /* 防止换行 */
  /* background: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
/* } */
/* 
.nav-link {
  margin: 0 15px; /* 设置左右边距 */
  /* color: #5a5a5a; /* 链接颜色 */
  /* text-decoration: none; /* 移除下划线 */
  /* font-weight: bold;
  transition: color 0.3s ease;
} */ 

/* .nav-link:hover {
  color: #000000; /* 悬停时的链接颜色 */
  /* text-decoration: underline;
} */ 
</style> 
