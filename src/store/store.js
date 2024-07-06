import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//仓库:store | 声明全局可用
const store = new Vuex.Store({ 

    // this.store.state.'xxx' 状态
    state: {
      isLoggedIn: false,

      count: 0,
      todos: [
          {id: 1, text: '前端', done: true},
          {id: 2, text: '吃dai', done: true},
      ],
        

    },

    // 获取状态(state)的派生状态
    getters: {
        count: state => state.count,
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)  // filter创建一个新数组，其包含通过所提供函数实现的测试的所有元素,它不会改变原数组
        }
    },

    // this.$store.commit('xxx') 提交突变
    mutations: {
      login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
      },
        increment(state, num) {
            state.count += num;
            console.log('触发mutations，count的值为', state.count);
        },
        add (state, num) {
            // 状态传进来加
            state.count += num;
        },
        abb (state, num) {
            // 状态传进来减
            state.count -= num;
        },
    },
    
     // 派发异步操作的逻辑(不做修改，修改只在mutations实现)
    actions: {
      delayincrement(store, num){
        setTimeout(() => {
        store.commit('increment', num);
      }, 2000)
      }
    },
    modules: {
      // 可分模块
    }
});

export default store;



