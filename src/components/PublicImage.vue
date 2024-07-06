<template>
  <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">


    <el-table-column prop="userid" label="作者ID" width="180"></el-table-column>

    <el-table-column prop="imageurl" label="图片" width="180">
      <template v-slot="scope">
        <img :src="scope.row.imageurl" alt="image" style="width: 100px; height: auto;" />
        <!-- <p>{{ index }}</p> -->
      </template>
    </el-table-column>

    <el-table-column prop="created" label="上传时间"></el-table-column>

  </el-table>
</template>

<script>
// 导入
export default {
  data() {
    return {
      tableData: [],
      // index: scope.row.imageurl,
    };
  },
  created () {
    this.fetchData();
  },

  methods: {

    fetchData() {
      this.$http.get("/images/public")
      .then((response) => {
        //假设响应数据是一个图像对象数组
        this.tableData = response.data.map(images => {
          const imageUrl = "http://localhost:8088" + images.url;//position
          console.log("images:", images);  // 在控制台输出 imageurl
          return {
            ...images, // 使用对象展开运算符保留图像对象的所有属性
            imageurl: imageUrl,
          };
        });
      }).catch((error) => {
        console.error("Error fetching images:", error);
      });
    },
  },
  
}
</script>


