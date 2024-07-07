import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//仓库:store | 声明全局可用
const store = new Vuex.Store({ 

    // this.store.state.'xxx' 状态
    state: {
      UserID: '未登录',
      isLoggedIn: false,
      // URL: 'http://localhost:8088',

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
      // delayincrement(store, num){
      //   setTimeout(() => {
      //     store.commit('increment', num);
      //   }, 2000)
      // }
    },

    modules: {
      // 可分模块
    }
});

export default store;



