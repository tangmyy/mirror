import Vue from 'vue'
import Vuex from 'vuex'
// 为什么这里也要导入 main.js不是全局的吗？
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8088/api"
Vue.prototype.$http = axios

Vue.use(Vuex)

//仓库:store | 声明全局可用
const store = new Vuex.Store({ 

    // this.store.state.'xxx' 状态
    state: {
      UserID: '未登录',
      isLoggedIn: false,
      HTTP: 'http://localhost:8088',
      PublicImages: [],

      PublicImageURL: [],
      UserImageURL: [],
    },

    // this.$store.commit('xxx') 提交突变
    mutations: {
      login(state, username) {
        state.isLoggedIn = true;
        state.UserID = username;
      },
      logout(state) {
        state.isLoggedIn = false;
        state.UserID = '';
      },
      setPublicImages(state, images) {
        state.PublicImages = images;
      },

    },

    // 获取状态(state)的派生状态(过滤/计数)   注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
    getters: {
      // count: state => state.count,
      // doneTodos: state => {
      //   // filter创建一个新数组，其包含通过所提供函数实现的测试的所有元素,它不会改变原数组
      //   return state.todos.filter(todo => todo.done)
      // },
      // doneTodosCount:(state, getters) =>{
      //   return getters.doneTodos.length
      // }

    },


    // 派发异步操作的逻辑(不做修改，修改只在mutations实现)
    actions: {

      fetchPublicImages({ commit }) {
        // 不可以使用 this.$http.get("/images/public")
        return axios.get("http://localhost:8088/api/images/public")
        .then((response) => {
          commit('setPublicImages', response.data);
        }).catch((error) => {
          console.error("Error fetching images:", error);
        });
      },
      
    },


    modules: {
      // 可分模块
    }
});

export default store;



