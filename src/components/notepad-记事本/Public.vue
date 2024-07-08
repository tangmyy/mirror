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

// 方法一：使用 data 和 methods
// 优点：
// 数据可控性更强：你可以在 updateImageUrls 方法中对 Image 数组进行更复杂的处理。
// 灵活性更高：适合需要在数据获取后对数据进行进一步处理的场景。
// 调试更方便：可以在方法中添加断点或 console.log 来调试数据的更新过程。
// 缺点：
// 代码稍显冗长：需要在 created 钩子中显式调用方法更新数据。
// 数据响应性稍弱：依赖 fetchPublicImages 方法的执行顺序，如果 fetchPublicImages 异步请求失败，需要额外处理。

// 方法二：使用 computed 属性
// 优点：
// 响应性强：computed 属性会自动响应 PublicImages 或 HTTP 的变化，无需手动更新数据。
// 代码简洁：省去了显式调用 updateImageUrls 方法的步骤。
// 缺点：
// 可控性稍弱：不适合需要在数据获取后进行复杂处理的场景。
// 调试稍困难：调试 computed 属性中的逻辑时，需要通过 Vue Devtools 或在模板中添加临时输出来查看结果。

// 总结
// 方法一 适用于需要对数据进行复杂处理或希望更明确控制数据更新过程的场景。
// 方法二 适用于数据处理简单、希望代码简洁且希望自动响应数据变化的场景。
// 根据具体需求选择合适的方法。如果数据获取后不需要复杂处理且希望自动响应数据变化，使用 computed 属性更为合适。
// 如果需要在数据获取后进行进一步处理，则使用 data 和 methods 更为合适。

import { mapState, mapMutations, mapActions } from 'vuex';
import { PuBu } from "@/components/JS/PuBu"

export default {
  name: 'PuBu',

  computed:{
    ...mapState([
      'HTTP',
      'PublicImages',
    ]),

    imageUrl() {
      return this.PublicImages.map(image => ({
        ...image,
        imageurl: this.HTTP + image.url,
      }));
    }
  },

  created() {
    this.fetchPublicImages();
  },

  methods:{
    ...mapMutations({
      setPublicImages: 'setPublicImages',
    }),
    ...mapActions([
      'fetchPublicImages'
    ]),

    imageonload(){
      new PuBu({
        el:".wf-content",
        column:4,
        gap:20
      })
    },
  }
}

// import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

// // 导入
// export default {
//   name: 'PublicImage',

//   data() {
//     return {
//       tableData: [],      
//     };
//   },

//   created() {
//     this.fetchPublicImages().then(() => {
//       this.updateTableData();
//     });
//   },

//   // computed：定义计算属性(具有缓存性)
//   computed:{
//     ...mapState([
//       'HTTP',
//       'PublicImages',
//     ]),
//     ...mapGetters({         

//     }),
//   },

//   methods: {
//     ...mapMutations({
//       setPublicImages: 'setPublicImages',
//     }),
//     ...mapActions([
//       'fetchPublicImages'
//     ]),

//     // 被中央仓库简化了
//     updateTableData() {
//       // console.log('PublicImages:', this.PublicImages);
//       this.tableData = this.PublicImages.map(image => ({
//         ...image,
//         imageurl: this.HTTP + image.url,
//       }));
//     },

//   },
// }
</script>





