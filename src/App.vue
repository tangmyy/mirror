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

        <b-navbar-dropdown label="其他">
          <router-link class="new" to="/VueFour">
            <b-navbar-item>
              无限滚动
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueFive">
            <b-navbar-item>
              加载中...
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueSix">
            <b-navbar-item>
              幻灯片
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/PuBu">
            <b-navbar-item>
              移动端瀑布流
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueSeven">
            <b-navbar-item>
              VueSeven
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueEight">
            <b-navbar-item>
              VueEight
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueNine">
            <b-navbar-item>
              VueNine
            </b-navbar-item>
          </router-link>
          <router-link class="new" to="/VueTen">
            <b-navbar-item>
              VueTen
            </b-navbar-item>
          </router-link>
        </b-navbar-dropdown>
    
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

            <div v-if="isLoggedIn" class="user-section">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <el-button type="success" plain>{{ UserID }}：欢迎您！👏</el-button>
              <el-button type="warning" @click="APPlogout" plain>退出登录</el-button>
            </div>

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

  </div>
</template>


<script>
// import { Mock } from '../mock/mock';
import { mapState, mapMutations } from 'vuex';
import Home from './components/Home.vue';



export default {
  name: 'App',
  // 注册组件
  components: {   
    Home,
  },
  // 2. methods：定义组件的方法。
  methods: {
    ...mapMutations([
      'login',
      'logout',
    ]),
    APPlogout() {
      this.logout(); // 调用 Vuex 的 logout 突变
      // 删除所有 cookies
      document.cookie.split(";")
      .forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")// 匹配字符串开头的一个或多个空格,并将其替换为空字符串,确保后续操作的正确性。
          .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
          // 匹配等号及其后面的所有字符，并将其替换为 =;expires= + UTC 时间 + ;path=/。
      });

      // 跳转到登录页
      this.$router.push({ path: '/Login' });
    },
  },

  // 3. computed：定义计算属性(具有缓存性)
  computed: {
    ...mapState([
      'isLoggedIn',
      'UserID',
    ])
  },

}

</script>



<style lang="scss" scoped>
.b-tooltips {
  .b-tooltip:not(:last-child) {
      margin-right: .5em
  }
  .b-tooltip {
      margin-bottom: .5em
  }
}

.user-section {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中，可选 */
}

.user-section .el-avatar {
  margin-right: 10px; /* 设置头像和按钮之间的间距 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中，可选 */
}
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
