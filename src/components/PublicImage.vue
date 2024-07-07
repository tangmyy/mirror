<template>
  <el-table :data="tableData" style="width: 100%">


    <el-table-column prop="userid" label="作者ID" width="180"></el-table-column>
    <el-table-column prop="imageid" label="图片id"></el-table-column>

    <el-table-column prop="imageurl" label="图片" width="180">
      <template v-slot="scope">
        <img :src="scope.row.imageurl" alt="image" style="width: 100px; height: auto;" />
      </template>
    </el-table-column>

    <el-table-column prop="created" label="上传时间"></el-table-column>
    <el-table-column prop="url" label="图片路径"> </el-table-column>     
   


  </el-table>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

// 导入
export default {
  data() {
    return {
      tableData: [],      
    };
  },

  created() {
    this.fetchPublicImages().then(() => {
      this.updateTableData();
    });
  },

  computed:{
    ...mapState([
      'HTTP',
      'PublicImages',
    ]),
    ...mapGetters({         

    }),
  },

  methods: {
    ...mapMutations({
      setPublicImages: 'setPublicImages',
    }),
    ...mapActions([
      'fetchPublicImages'
    ]),


    // 被中央仓库简化了
    updateTableData() {
      // console.log('PublicImages:', this.PublicImages);
      this.tableData = this.PublicImages.map(image => ({
        ...image,
        imageurl: this.HTTP + image.url,
      }));
    },


    // 中央仓库 无敌了 全部取代 
    // fetchData() {
    //   this.$http.get("/images/public")
    //   .then((response) => {
    //     //假设响应数据是一个图像对象数组
    //     this.tableData = response.data.map(images => {
    //       const imageUrl = this.HTTP + images.url;
    //       return {
    //         ...images,                                   // 使用对象展开运算符保留图像对象的所有属性
    //         imageurl: imageUrl,
    //       };
    //     });
    //   }).catch((error) => {
    //     console.error("Error fetching images:", error);
    //   });
    // },

  },
}
</script>


