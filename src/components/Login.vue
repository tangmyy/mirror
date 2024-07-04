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
  import axios from 'axios';
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
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.form); // 直接打印formData对象
            // 发送数据到后端
            this.$http.post('/users/login',  this.form, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(response => {
              // 处理成功响应
              alert('登录成功!');
            })
          } else {
            alert('登录失败!！');
            return false;
          }
        });
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
  
  