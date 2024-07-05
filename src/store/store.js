// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 常量 商店 = VueX的商店类
const store = new Vuex.Store({      // 注意此处大写 new Vuex.Store
    // 状态 state 常量 = 0
    state: {
        count: 0,
        todos: [
            {id: 1, text: '冥冥', done: true},
            {id: 2, text: '吃dai', done: true},
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done) 
        }
    },
    mutations: {
        add (state, n) {
            // 状态传进来加
            state.count += n
        },
        abb (state, n) {
            // 状态传进来减
            state.count -= n
        },
    },
})



