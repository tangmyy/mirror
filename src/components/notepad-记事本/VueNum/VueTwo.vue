<template>
  <b-carousel :autoplay="true" indicator-custom :indicator-inside="false" :overlay="gallery" @click="switchGallery(true)">
      <b-carousel-item v-for="(item, i) in Image.length" :key="i">
          <a class="image ">
              <img :src="getImgUrl(i)" >
          </a>
      </b-carousel-item>
      <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
      <template #indicators="props">
          <figure class="al image" :draggable="false">
              <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
          </figure>
      </template>
  </b-carousel>
  <!-- 您可能还想将is-clipped修饰符添加到包含元素（通常是html）以阻止滚动溢出。 -->
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
      return {
          gallery: false,
          Image: [] // 初始化Image数组
      }
  },
  computed: {
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
  methods: {
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
    getImgUrl(index) {
      return this.Image[index].imageurl;
    },
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add('is-clipped');
      } else {
        return document.documentElement.classList.remove('is-clipped');
      }
    }
  }
}
</script>

<style>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>
