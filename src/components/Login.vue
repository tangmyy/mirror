<template>
    <div class="register-container">
      <el-card class="register-card">
        <h2 class="register-title">登录</h2>

        <el-form :model="form" :rules="rules" ref="form" label-width="100px">

          <el-form-item label="用户名" prop="username"> 
            <el-input v-model="form.username"></el-input> 
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
        message: '', // 存储状态信息
      };
    },
    methods: {
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
          try {
            console.log(this.form); // 直接打印formData对象
            // 发送数据到后端
            this.$http.post('/users/login',  this.form, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            alert('登录成功!');
            await this.checkStatus();
          }catch (error) {
            console.error('登录请求失败:', error);
            alert('登录失败!');
          }
        } else {
          alert('登录失败!');
          return false;
        }
      });
    },
      async checkStatus() {
        try {
          const response = this.$http.get('/users/status');
          if (response.status === 200) {
            this.message = response.data;
          } else {
            this.message = '获取用户状态失败';
          }
        } catch (error) {
          console.error('获取用户状态请求失败:', error);
          this.message = '获取用户状态请求失败，请稍后重试';
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
  </script>
  

  <style>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .register-card {
    width: 400px;
    padding: 20px;
  }
  
  .register-title {
    text-align: center;
    color: #409EFF; /* 使用 Vue 的主题色 */
    margin-bottom: 20px;
  }
  </style>
  
  