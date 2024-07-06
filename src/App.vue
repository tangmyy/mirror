<template>
  <div>
    <!-- 首页导航栏 -->
    <b-navbar>
      <template #brand>
        <!-- src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" -->
        <b-navbar-item tag="router-link" :to="{ path: '/Login' }">
          <img
          src="@/assets/MirrorLogo.png"
          alt="图片被臭冥冥吃了"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <router-link class="new" to="/Home">
          <b-navbar-item>
            首页
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/PublicImage">
          <b-navbar-item>
            公共相册
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/PrivateImage">
          <b-navbar-item>
            个人空间
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/UpFile">
          <b-navbar-item>
            上传图片
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/VueTwo">
          <b-navbar-item>
            预加页面
          </b-navbar-item>
        </router-link>

        <router-link class="new" to="/VueThree">
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
            <a class="button is-light" v-if="!isLoggedIn">
              <router-link to="/Login">登录</router-link>
            </a>

            <router-link to="/Register" v-if="!isLoggedIn">
              <a class="button is-primary">
                <strong>注册</strong>
              </a>
            </router-link>
            <a class="button is-light" v-if="isLoggedIn" @click="logout">
              注销
            </a>
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
import Home from './components/Home.vue';

import { mapState, mapMutations } from 'vuex';


export default {
  name: 'App',
  // 注册组件
  components: {   
    Home,
  },
  // 2. methods：定义组件的方法。
  methods: {
    ...mapMutations(['login']), // 其实可以写一起，用逗号隔开...
    ...mapMutations(['logout']),
  },
  // 3. computed：定义计算属性(具有缓存性)
  computed: {
    ...mapState(['isLoggedIn'])
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
</style> 
