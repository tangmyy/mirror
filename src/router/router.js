import Vue from "vue";
import VueRouter from "vue-router";

import Body from '../components/notepad/Body.vue'
import HelloVueX from '../components/HelloVueX.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Table from '../components/Table.vue'

import Test from '../components/Test/Test.vue'
import TestOne from '../components/Test/TestOne.vue'
import TestTwo from '../components/Test/TestTwo.vue'
import TestXXX from '../components/Test/TestXXX.vue'

import UpFile from '../components/UpFile.vue'

// 将 VueRouter 设置为 Vue 的插件
Vue.use(VueRouter)



// 创建路由对象
const router = new VueRouter({
    // mode: 'history',             // 模式切换
    base: process.env.BASE_URL,     // 基础地址
    routes:[
        //path 地址 name 替代名 redirect 组件
        { 
          path:'/', 
          name: 'Home',
          redirect:"/App" 
        },
        { 
          path:'/HelloVueX', 
          name: 'HelloVueX',
          component: HelloVueX 
        },
        { path:'/Login', 
          name: 'Login',
          component: Login 
        },
        { path:'/Register', 
          name: 'Register',
          component: Register 
        },
        { path:'/Table', 
          name: 'Table',
          component: Table 
        },
        { path:'/Test/Test', 
          name: 'Test',
          component: Test,
            children:[
                { 
                  path:'/Test/TestOne', 
                  name: 'TestOne',
                  component: TestOne 
                },
                { path:'/Test/TestTwo', 
                  name: 'TestTwo',
                  component: TestTwo 
                },
                { path:':id', 
                  name: 'TestXXX',
                  component: TestXXX, 
                  props: true},     // 第二种方式， props传递
            ] 
            
        },
        { path:'/UpFile', 
          name: 'UpFile',
          component: UpFile 
        },
    ]

})

export default router