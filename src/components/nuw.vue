<template>
    <div>
      <h1>登录</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">用户名:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/api/users/login', {
            username: this.username,
            password: this.password
          });
          if (response.status === 200) {
            this.message = response.data;
            this.checkStatus();
          } else {
            this.message = '登录失败，请检查用户名和密码';
          }
        } catch (error) {
          console.error('登录请求失败:', error);
          this.message = '登录请求失败，请稍后重试';
        }
      },
      async checkStatus() {
        try {
          const response = await axios.get('/api/users/status');
          if (response.status === 200) {
            this.message = response.data;
            this.$router.push('/'); // 登录成功后重定向到主页或其他受保护的页面
          } else {
            this.message = '获取用户状态失败';
          }
        } catch (error) {
          console.error('获取用户状态请求失败:', error);
          this.message = '获取用户状态请求失败，请稍后重试';
        }
      }
    }
  };
  </script>