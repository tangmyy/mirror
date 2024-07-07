<template>
  <el-table :data="tableData" style="width: 100%">


    <el-table-column prop="userid" label="作者ID" width="180"></el-table-column>

    <el-table-column prop="imageurl" label="图片" width="180">
      <template v-slot="scope">
        <img :src="scope.row.imageurl" alt="image" style="width: 100px; height: auto;" />
      </template>
    </el-table-column>

    <el-table-column prop="created" label="上传时间"></el-table-column>
    
    <el-table-column label="图片路径"> </el-table-column>        


  </el-table>
</template>

<script>
  import { mapState,mapGetters,mapMutations } from 'vuex';

// 导入
export default {
  data() {
    return {
      tableData: [],      
    };
  },

  created () {
    this.fetchData();
  },

  computed:{
    ...mapState([

    ]),
    ...mapGetters({                  
      // ShuZu: 'doneTodos',
      // ShuZuCount: 'doneTodosCount',
    }),
  },

  methods: {
    ...mapMutations({
      // adddd: 'add',
      // abbbb: 'abb',
    }),

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


