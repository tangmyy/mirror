<template>
  <section>

    <b-field class="file">
      <b-upload v-model="file" expanded>
        <a class="button is-primary is-fullwidth">
          <b-icon icon="upload"></b-icon>
          <span>{{ file.name || "点击上传"}}</span>
        </a>
      </b-upload>
    </b-field>
    
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

    <b-field>
      <b-button @click="uploadImage">上传图片</b-button>
    </b-field>

  </section>
</template>

<script>
export default {
  data() {
    return {
      beLazy: false,
      value: null,

      file: {},     // 单个文件对象
      dropFiles: [], // 拖放上传的文件数组
      description: '', // 图像描述
      isPublic: '', // 图像公开状态
    };
  },
  methods: {
    // 删除拖放上传的文件
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    
    async uploadImage() {
      // 检查文件是否存在
      if (!this.file || Object.keys(this.file).length === 0) {
        alert('请先选择一个文件');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('description', this.description);
      formData.append('Public', this.isPublic);

      try {
        const response = await this.$http.post('/api/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data === '上传成功') {
          alert('上传成功');
          // 清空已上传的文件
          this.file = {};
          this.dropFiles = [];
        } else {
          alert('上传失败: ' + response.data);
        }
      } catch (error) {
        console.error('上传失败', error);
        alert('上传失败');
      }
    }
  }
  
};
</script>

<style>

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
</style> -->

