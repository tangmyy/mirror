<template>
  <div class="Waterfall wf-content">
    <div class="wf-item" v-for="(image,index) in Image" :key="index">
      
      <img alt="" :src="image.imageurl" @load="imageonload">

     </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import { PuBu } from "@/components/JS/PuBu"

export default {
  name: 'PublicImage',

  data() {
    return {
      Image: [],      
    };
  },

  // computed：定义计算属性(具有缓存性)
  computed:{
    // ...mapState([  {}[]
    ...mapState([
      'HTTP',
      'PublicImages',
    ]),

  },

  created() {
    this.fetchPublicImages().then(() => {
      this.updateImageUrls();
    });
  },

  methods:{
    ...mapMutations({
      setPublicImages: 'setPublicImages',
    }),
    ...mapActions([
      'fetchPublicImages'
    ]),

    updateImageUrls() {
      this.Image = this.PublicImages.map(image => ({
        ...image,
        imageurl: this.HTTP + image.url,
      }));
    },

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
