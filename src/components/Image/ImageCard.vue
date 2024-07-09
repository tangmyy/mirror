<template>
  <div class="step-content">
    <section>
      <div class="buttons">
        <b-button
        label="点击预览（效果图）"
        type="is-primary"
        size="is-medium"
        @click="isCardModalActive = true" 
        />
      </div>
      
      <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <div class="card" v-for="(file, index) in dropFiles" :key="index">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="file.previewUrl" alt="哎呀，图片走丢啦...">
              </figure>
            </div>
            
            <div class="card-content">
              <div class="media">
                <!-- <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="/static/img/placeholder-1280x960.png" alt="头像">
                  </figure>
                </div> -->
                <div class="media-content">
                  <p class="title is-4">{{ UserID }}</p>
                  <p class="subtitle is-6">{{ UserID }}</p>
                </div>
              </div>
              
              <div class="content">
                这是作品描述这是作品描述这是作品描述这是作品描述这是作品描述这是作品描述。
                <a>@话题</a>.<a>#标签</a> <a>#标签</a>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </section>
    <br>
    <b-field class="file">
      <a class="button is-primary is-fullwidth" @click="uploadImage">
        <b-icon icon="upload"></b-icon>
        <span>{{ dropFiles.length > 0 ? "上传图片" : "点击上传"}}</span>
      </a>
    </b-field>
  </div>
</template>


<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

export default {
  name: 'ImageCard',

  data() {
    return {
      isCardModalActive: false, // 控制模态框的显示状态
    };
  },

  computed:{
    ...mapState([
      'dropFiles', // 拖放上传的文件数组  
      'value', // 图片描述
      'texts', // 标签数组
      'isPublic', // 图像公开状态

      'UserID',
    ]),
  },


  methods: {
    ...mapMutations([
      'updateDropFiles', // 更新文件数组的突变
    ]),



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