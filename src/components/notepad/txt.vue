<template>
  <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">


    <el-table-column prop="userid" label="名称" width="180"></el-table-column>

    <el-table-column prop="imageurl" label="tupain" width="180">
      <template v-slot="scope">
        <img :src="scope.row.imageurl" alt="image" style="width: 100px; height: auto;" />
        <!-- <p>{{ index }}</p> -->
      </template>
    </el-table-column>

    <el-table-column prop="url" label="是否公开"></el-table-column>

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
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    fetchData() {
      this.$http.get("/images/public")
      .then((response) => {
        //假设响应数据是一个图像对象数组
        this.tableData = response.data.map(images => {
          return {
            ...images, // 使用对象展开运算符保留图像对象的所有属性
            imageurl: "http://localhost:8088" + images.url,
          };
        });
      }).catch((error) => {
        console.error("Error fetching images:", error);
      });
    },
  },
  
}
</script>




<style>

</style>
