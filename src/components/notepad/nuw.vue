<template>
  <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">


    <el-table-column prop="userid" label="名称" width="180"></el-table-column>

    <el-table-column prop="imageurl" label="tupain" width="180">
      <template v-slot="scope">
        <img :src="scope.row.imageurl" alt="image" style="width: 100px; height: auto;" />
      </template>
    </el-table-column>

    <el-table-column prop="email" label="邮箱"></el-table-column>

  </el-table>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tableData: []
    };
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

    async fetchData() {
      console.log("fetchData");
      try {
        const response = await this.$http.get('/images/user', {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          //通过设置 withCredentials 可以确保在跨域请求中带上当前域名下的 Cookies。
          withCredentials: true, // 确保请求包含凭证
        });
        //处理响应数据
        this.tableData = response.data.map(images => {
          return {
            ...images, // 使用对象展开运算符保留图像对象的所有属性
            imageurl: "http://localhost:8088" + images.url
          };
        });
      } catch (error) {
        console.error('网络异常，上传失败', error);
        alert('网络异常，上传失败');
      }
    },
  },

  created () {
    console.log("created"),
    this.fetchData();
  }
}



</script>
