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
        password: ''
      },
      rules: {
        username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
    // 验证表单
    this.$refs[formName].validate((valid) => {
      if (valid) {
        // 如果表单验证通过，发送请求
        this.$http.post('/users/login', this.form, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // 确保请求包含凭证

        })
        .then(response => {
          // 登录成功处理
          alert('登录成功!');
          setTimeout(() => {
            console.log('跳转到 Home 页面');
            this.$router.push({ name: 'Home' });
          }, 500);

          // 在控制台输出成功信息
          console.log('登录响应:', response.data);
          
          // 获取并输出所有 cookies
          const cookies = document.cookie;
          console.log('Cookies:', cookies);
          
          // 输出 JSESSIONID
          const jsessionId = cookies
            .split('; ')
            .find(row => row.startsWith('JSESSIONID='))
            ?.split('=')[1];
          console.log('JSESSIONID:', jsessionId);

        })
        .catch(error => {
          // 登录失败
          console.error(error);
          if (error.response && error.response.status === 401) {
            // 用户名或密码错误
            alert('登录失败，用户名或密码错误');
          } else {
            // 网络或其他错误
            alert('网络错误,登录异常!');
          }
          // 无论什么错误，都返回登录页
          // this.$router.push({ name: 'Login' });
        });
      } else {
        // 表单验证失败，提示用户输入有效数据
        alert('请填写有效的用户名和密码');
      }
    });
  },

    
    // 重置以清空表单内容
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
    height: 50vh;
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
  
  