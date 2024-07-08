<template>
  <div class="step-content">
    <b-field>
      <b-switch v-model="beLazy">点击试试！</b-switch>
    </b-field>
    
    <b-field>
      <p>
        <br>
        <b-input type="text"
        :lazy="beLazy"
        v-model="value"
        placeholder="请输入...">
      </b-input>
      <br>
      照片描述: {{value}}
    </p>
  </b-field>
</div>
</template>



<script>
  export default {
    name: 'ImageAdd',


    data() {
      return {
        beLazy: false,
        value: '',
        dropFiles: [], // 拖放上传的文件数组
        isPublic: false, // 图像公开状态
  
        activeStep: 0,
        isRounded: true,
        showSocial: true,
        isAnimated: true,
        isStepsClickable: true,
  
        hasNavigation: true,
        customNavigation: false,
        isProfileSuccess: false,
        
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right',
        labelPosition: 'bottom',
        mobileMode: 'minimalist',
  
        // 展示
        isCardModalActive: false
      }
    },
    methods: {
      // 删除照片  
      deleteDropFile(index) {
        this.dropFiles.splice(index, 1);
      },
  
      async uploadImage() {
        // 检查是否有文件被拖放上传
        if (this.dropFiles.length === 0) {
          alert('请先选择一个文件');
          return;
        }
        // FormData 是一种用于构建和发送 multipart/form-data 编码的表单数据的 Web API
        // formData.append 方法用于将键值对添加到 FormData 对象中。
        // 该方法允许你向 FormData 对象中添加任意数量的字段和文件，类似于 HTML 表单的字段
        // element：每次迭代时的元素  iterable：一个可迭代对象（如数组、字符串、Map、Set 等）for (const element of iterable) 
        for (const file of this.dropFiles) {
          // 创建新的 FormData 对象
          const formData = new FormData();
          formData.append('file', file);
          formData.append('description', this.value);
          formData.append('Public', this.isPublic);
  
          // 发送单独的上传请求
          try {
            const response = await this.$http.post('/images/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              withCredentials: true,
            });
            alert('上传成功');
          } catch (error) {
            console.error('网络异常，上传失败', error);
            alert('网络异常，上传失败');
          }
        }
  
      }
  
    }
  
  }
  
  </script>
  
  
  
  
  <style scoped>
  .upload-form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .step-item {
    margin-right: 400px; /* 设置水平间距 */
  }
  
  
  .step-content {
    margin-left: 400px; /* 设置水平间距 */
    margin-top: 150px;
    margin-bottom: 150px;
  }
  
  .little {
    margin-top: 20px;
  }
  
  
  .fixed-navigation {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
  }
  
  .fixed-div {
    position: absolute;
    bottom: 20px; /* 距离底部20px */
    right: 20px; /* 距离右侧20px */
    padding: 10px; /* 内边距 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  }
  </style>

