<template>
  <section>
    <b-field>
      <b-upload v-model="dropFiles" multiple drag-drop expanded>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>将文件拖到此处，或点击上传</p>
          </div>
        </section>
      </b-upload>
    </b-field>

    <div class="tags">
      <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
        {{file.name}}
        <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
      </span>
    </div>

    <b-field>
      <div>
        <b-switch v-model="isPublic">公开图片</b-switch>
      </div>
      <div>
        <p>
          图片公开状态: {{isPublic ? "公开" : "私密"}}
        </p>
      </div>
      
    </b-field>
      
    <b-field>
      <b-switch v-model="beLazy">点击试试！</b-switch>
    </b-field>
      
    <b-field>
        <p>
          <b-input type="text"
          :lazy="beLazy"
          v-model="value"
          placeholder="请输入...">
          </b-input>
          照片描述: {{value}} 
        </p>
    </b-field>

    <b-field class="file">
        <a class="button is-primary is-fullwidth" @click="uploadImage">
          <b-icon icon="upload"></b-icon>
          <span>{{ dropFiles.length > 0 ? "上传图片" : "点击上传"}}</span>
        </a>
    </b-field>
  </section>
</template>

<script>

export default {
  data() {
    return {
      beLazy: false,
      value: '',

      dropFiles: [], // 拖放上传的文件数组
      isPublic: false, // 图像公开状态
    };
  },
  methods: {
    // 删除拖放上传的文件
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
      const formData = new FormData();
      this.dropFiles.forEach((file,index) => {
        formData.append('file', file);
        formData.append('description', this.value);
        formData.append('Public', this.isPublic);
      });

      try {
        const response = await this.$http.post('/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          //通过设置 withCredentials 可以确保在跨域请求中带上当前域名下的 Cookies。
          withCredentials: true, // 确保请求包含凭证
        });
        if (response.data === '上传成功') {
          alert('上传成功');
          // 清空已上传的文件
          this.dropFiles = [];
          this.value = '';
          this.isPublic = false;
        } else {
          alert('服务器有误，上传失败: ' + response.data);
        }
      } catch (error) {
        console.error('网络异常，上传失败', error);
        alert('网络异常，上传失败');
      }
    }
  }
};
</script>

<style scoped>
.upload-form {
  max-width: 500px;
  margin: 0 auto;
}
</style>


<!-- 饿了么UI -->
<!-- <template>
    <div class="upfile">
    <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </div>
</template>
<style>
.upfile {
  margin-top: 20px;
}
</style> --><!-- 饿了么UI -->
<!-- <template>
    <div class="upfile">
    <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </div>
</template>
<style>
.upfile {
  margin-top: 20px;
}
</style> -->