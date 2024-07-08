<template>
  <el-carousel indicator-position="outside">

    <el-carousel-item v-for="item in image" :key="item">
      <h3>{{ item }}</h3>
      <img alt="" :src="image.imageurl" @load="imageonload">
    </el-carousel-item>

  </el-carousel>

</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

export default {
  name: 'VueSix',

  computed:{
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


<style>
.carousel-container {
  width: 100%; /* Adjust this value as needed */
  margin: 100 auto; /* Center the carousel */
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>



