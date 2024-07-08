import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store/store'


import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PublicImage from '../components/PublicImage.vue'
import PrivateImage from '../components/PrivateImage.vue'

import VueTwo from '../components/VueTwo.vue'
import Vue3 from '../components/Vue3.vue'
import VueFour from '../components/VueFour.vue'
import VueFive from '../components/VueFive.vue'
import VueSix from '../components/VueSix.vue'
import VueSeven from '../components/VueSeven.vue'
import VueEight from '../components/VueEight.vue'
import VueNine from '../components/VueNine.vue'
import VueTen from '../components/VueTen.vue'

import Image from '../components/Image/Image.vue'



Vue.use(VueRouter)    // 将 VueRouter 设置为 Vue 的插件


// 创建路由对象
const router = new VueRouter({
  mode: 'history',             // 模式切换
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
        component: PrivateImage, 
        meta: { requiresAuth: true }
      },
      { path:'/Image/Image', 
        name: 'Image',
        component: Image, 
      },

      { path:'/VueTwo', 
        name: 'VueTwo',
        component: VueTwo, 
      },
      { path:'/Vue3', 
        name: 'Vue3',
        component: Vue3, 
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

  ]
})


// to.matched: 包含一个数组，
// 数组中的每个元素都是一个路由记录对象，对应着当前匹配的路由以及所有嵌套路由。
// some: JavaScript 数组方法，用于测试数组中的至少一个元素是否通过由提供的函数实现的测试。
// 如果找到一个满足条件的元素，则 some 返回 true，否则返回 false。
// [
//   {
//     path: '/parent',
//     component: ParentComponent,
//     meta: { requiresAuth: true, role: 'admin' },
//     children: [ /* ... */ ]
//   },
//   {
//     path: '/parent/child',
//     component: ChildComponent,
//     meta: { requiresAuth: true, role: 'user' }
//   }
// ]
// 在导航守卫中，to.matched 和 from.matched 数组中的每一项就是一个 record。
// 此处用于检查每个路由记录对象（record）的 meta.requiresAuth 属性是否为 true。
// requiresAuth通常用于标识某个路由是否需要用户进行身份验证才能访问。
// requiresAuth在上面由routes定义了：meta: { requiresAuth: true }
// 如果为true => 判断登录状态

// record.meta
// record 通常指的是路由记录，是 routes 配置数组中的每个路由对象。
// 每个路由记录对象包含路径、组件、子路由、重定向、别名、路由元信息等。
// { requiresAuth: true, role: 'admin' }
// { requiresAuth: true, role: 'user' }

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLoggedIn) {
      alert('暂未登录！请先登录！');
      next({
        path: '/Login',
        query: { redirect: to.fullPath }
        // this.$route.query.redirect
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router