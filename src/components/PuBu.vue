<template>
  <div class="Waterfall wf-content">
    <div class="wf-item" v-for="(image,index) in imageUrl" :key="index">
      
      <img alt="" :src="image.imageurl" @load="imageonload">

     </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import { PuBu } from "@/components/JS/PuBu"

export default {
  name: 'PuBu',
  // data(){
  //   return{
  //     imageUrl:[
  //       "http://localhost:8088/images/2f0cc9af-c184-4523-98ce-9c55ccae3aad.png",
  //       "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  //       "https://via.placeholder.com/300",
  //       "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  //       "https://via.placeholder.com/400",
  //       "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
  //       "https://via.placeholder.com/500",
  //       "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  //       "https://via.placeholder.com/600",
  //       "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  //       "https://via.placeholder.com/700",
  //       "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  //       "https://via.placeholder.com/800",
  //       "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  //       "https://via.placeholder.com/900",
  //     ]
  //   }
  // },



  computed:{
    // ...mapState([      {}[]
    //   'HTTP',
    //   'PublicImages',
    // ]),
    ...mapState({
      HTTP: state => state.HTTP,
      PublicImages: state => state.PublicImages,
    }),

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
</script>

<style scoped>
  .Waterfall{
    width:960px;
    margin:0 auto;
    position:relative
  }
  .wf-item{
    position:absolute;
    border:5px solid white;
    box-shadow: -3px 2px 5px rgba(0,0,0,0.5);
  }
  .wf-item img{
    height:100%;
    width:100%
  }
</style>
