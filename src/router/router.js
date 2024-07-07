import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PublicImage from '../components/PublicImage.vue'
import PrivateImage from '../components/PrivateImage.vue'
import UpFile from '../components/UpFile.vue'

import VueTwo from '../components/VueTwo.vue'
import VueThree from '../components/VueThree.vue'
import VueFour from '../components/VueFour.vue'
import VueFive from '../components/VueFive.vue'
import VueSix from '../components/VueSix.vue'
import VueSeven from '../components/VueSeven.vue'
import VueEight from '../components/VueEight.vue'
import VueNine from '../components/VueNine.vue'
import VueTen from '../components/VueTen.vue'

import PuBu from '../components/PuBu.vue'

// import Test from '../components/Test/Test.vue'
// import TestOne from '../components/Test/TestOne.vue'
// import TestTwo from '../components/Test/TestTwo.vue'
// import TestXXX from '../components/Test/TestXXX.vue'


Vue.use(VueRouter)    // 将 VueRouter 设置为 Vue 的插件


// 创建路由对象
const router = new VueRouter({
    // mode: 'history',             // 模式切换
    base: process.env.BASE_URL,     // 基础地址
    routes:[
        //path 地址 name 替代名 redirect 组件
        { 
          path:'/', 
          name: 'ZX',
          redirect:"/Home" 
        },
        { 
          path:'/Home', 
          name: 'Home',
          component: Home 
        },
        { path:'/Login', 
          name: 'Login',
          component: Login 
        },
        { path:'/Register', 
          name: 'Register',
          component: Register 
        },
        { path:'/PublicImage', 
          name: 'PublicImage',
          component: PublicImage 
        },
        { path:'/PrivateImage', 
          name: 'PrivateImage',
          component: PrivateImage 
        },
        { path:'/UpFile', 
          name: 'UpFile',
          component: UpFile 
        },
        { path:'/VueTwo', 
          name: 'VueTwo',
          component: VueTwo 
        },
        { path:'/VueThree', 
          name: 'VueThree',
          component: VueThree 
        },
        { path:'/VueFour', 
          name: 'VueFour',
          component: VueFour 
        },
        { path:'/VueFive', 
          name: 'VueFive',
          component: VueFive 
        },
        { path:'/VueSix', 
          name: 'VueSix',
          component: VueSix 
        },
        { path:'/VueSeven', 
          name: 'VueSeven',
          component: VueSeven 
        },
        { path:'/VueEight', 
          name: 'VueEight',
          component: VueEight 
        },
        { path:'/VueNine', 
          name: 'VueNine',
          component: VueNine 
        },
        { path:'/VueTen', 
          name: 'VueTen',
          component: VueTen 
        },
        { path:'/PuBu', 
          name: 'PuBu',
          component: PuBu 
        },

        // { path:'/Test/Test', 
        //   name: 'Test',
        //   component: Test,
        //     children:[
        //         { 
        //           path:'/Test/TestOne', 
        //           name: 'TestOne',
        //           component: TestOne 
        //         },
        //         { path:'/Test/TestTwo', 
        //           name: 'TestTwo',
        //           component: TestTwo 
        //         },
        //         { path:':id', 
        //           name: 'TestXXX',
        //           component: TestXXX, 
        //           props: true},     // 第二种方式， props传递
        //     ] 
            
        // },

    ]

})

export default router