import Vue from "vue";
import VueRouter from "vue-router";


import Body from '../components/Body.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Table from '../components/Table.vue'

import Test from '../components/Test.vue'
import TestOne from '../components/TestOne.vue'
import TestTwo from '../components/TestTwo.vue'
import TestXXX from '../components/TestXXX.vue'

import UpFile from '../components/UpFile.vue'

// 将 VueRouter 设置为 Vue 的插件
Vue.use(VueRouter)




// 创建路由对象
const router = new VueRouter({
    // mode: 'history',             // 模式切换
    base: process.env.BASE_URL,     // 基础地址
    routes:[
        //path 地址 name 替代名 redirect 组件
        { path:'/', redirect:"/App" },
        { path:'/Body', component: Body },
        { path:'/Login', component: Login },
        { path:'/Register', component: Register },
        { path:'/Table', component: Table },
        { path:'/Test', component: Test,
            children:[
                { path:'/TestOne', component: TestOne },
                { path:'/TestTwo', component: TestTwo },
                // { path:':id', component: TestXXX}, // 第一种方式：内置获取 :id
                { path:':id', component: TestXXX, props: true},     // 第二种方式， props传递
            ] 
            
        },
        { path:'/UpFile', component: UpFile },
    ]

})

export default router