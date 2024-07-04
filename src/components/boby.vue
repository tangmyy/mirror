<template>
    <div class="center">
      <el-button @click="show3 = !show3" >Click Me</el-button>
  
      <div class="center-container">
        <el-collapse-transition>
          <div v-show="show3">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data: () => ({
        show3: false
      })
    }
  </script>
  
  <style>
  .center {
    margin-top: 20px;
  }
  .center-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-top: 20px;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #42b983;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  </style>