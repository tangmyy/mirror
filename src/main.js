import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import './mock/mock'

// 文件名为index才可以不写 如果文件名是其他的则必须写
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8088/api"
Vue.prototype.$http = axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
import 'animate.css';

import VueKinesis from 'vue-kinesis'
Vue.use(VueKinesis);



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

