<template>
<div class="step-content">
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
</div>
</template>


<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

export default {
name: 'ImageAdd',

data() {
  return {
    localDropFiles: []
  };
},
created() {
  this.localDropFiles = this.dropFiles;
},

computed: {
  ...mapState([
    'dropFiles' // 从 Vuex store 中获取 dropFiles
  ]),
},

  methods: {
    ...mapMutations([
      'updateDropFiles',
    ]),
    deleteDropFile(index) {
      this.localDropFiles.splice(index, 1);
    },
  },

methods: {
    ...mapMutations(['updateDropFiles']),
    handleFiles(files) {
      const newFiles = Array.from(files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      this.localDropFiles = [...this.localDropFiles, ...newFiles];
    },
    deleteDropFile(index) {
      URL.revokeObjectURL(this.localDropFiles[index].preview);
      this.localDropFiles.splice(index, 1);
      this.updateDropFiles(this.localDropFiles.map(f => f.file));
    }
  },

  watch: {
    dropFiles: {
      handler(newFiles) {
        this.localDropFiles = newFiles;
      },
      immediate: true,    // 监听器会在初始化时立即触发一次回调函数
      deep: true          // 监听器会对对象或数组的所有嵌套属性进行深度监听。这意味着任何嵌套属性的变化都会触发监听器回调函数，而不仅仅是顶层属性的变化。
    },
    localDropFiles: {
      handler(newFiles) {
        this.updateDropFiles(newFiles);
      },
      deep: true          // 监听器会对对象或数组的所有嵌套属性进行深度监听。这意味着任何嵌套属性的变化都会触发监听器回调函数，而不仅仅是顶层属性的变化。
    }
  },
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