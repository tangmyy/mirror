<template>
  <section>
      <b-field label="为图片添加标签🏷">
          <b-taginput
              v-model="texts"
              :maxtags="maxs">
          </b-taginput>
      </b-field>
  </section>
</template>
  
  

<script>
    export default {
        data() {
            return {
                maxs: 5,        // 最大标签数量
                texts: [],
            }
        }
    }
</script>