<template>
  <section>
    <b-field>
      <!-- 第一个开关按钮及其相关内容 -->
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

  </section>

</template>

<script>
  export default {
    data() {
      return {
          beLazy: false,
          value: null,
          isPublic: false, // 图像公开状态
      }
    }
  }
</script>

<style scoped>


</style>

