<template>
  <div class="demo-image__lazy">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="url in urls" :key="url" class="infinite-list-item">
        <el-image
          :src="url"
          lazy
          style="width: 1000px; height: 600px"
          :preview-src-list="previewSrcList">
        </el-image>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
data() {
  return {
    urls: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
    ],
    // 大图预览
    previewSrcList: [
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    ],
  }
},
  methods: {
    load() {
      this.urls.push(...[
      // 在这里添加更多图片到 urls 数组中实现无限滚动
      // 这里使用与初始 urls 相同的示例图片，你可以根据需要更改
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]);
    }
  }
}
</script>

<style>
.demo-image__lazy {
  width: 100%;
}

.infinite-list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.infinite-list-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.infinite-list {
  max-height: 650px;
  border: 1px solid #ddd;
  padding: 10px;
  list-style-type: none;
}

.infinite-list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

</style>

