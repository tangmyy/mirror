<template>
  <div class="container">
    <el-input v-model="keyword" placeholder="搜索关键字" />
    <el-button type="primary" @click="searchImages">搜索</el-button>

    <div class="tags-container">
      <el-tag
        v-for="tag in tags"
        :key="tag"
        @click="searchByTag(tag)"
        class="tag-item"
      >{{ tag }}</el-tag>
    </div>

    <div v-if="images.length === 0 && !isLoading" class="no-results">
      没找到
    </div>

    <div v-if="isLoading">加载中...</div>

    <div v-if="images.length > 0" class="Waterfall wf-content">
      <div class="wf-item" v-for="(image, index) in images" :key="index">
        <div class="image-container" @mouseover="showInfo(index)" @mouseleave="hideInfo(index)">
              <img alt="" :src="image.imageurl" @load="imageonload" />
          <div class="info-box" :class="{ 'show-info': image.showInfo }">
            <p>{{ image.description }}</p>
            <div class="tags">
              <el-tag
                v-for="tag in image.tags.split(';')"
                :key="tag"
                @click="searchByTag(tag)"
                class="tag-item"
              >{{ tag }}</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { PuBu } from "@/components/JS/PuBu";

export default {
  name: 'PublicImage',
  data() {
    return {
      keyword: '',
      images: [],
      tags: [],
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['HTTP', 'PublicImages']),
  },
  created() {
    this.fetchPublicImages().then(() => {
      this.updateImageUrls();
    });
    this.fetchTags();
  },
  methods: {
    ...mapActions(['fetchPublicImages']),
    ...mapMutations({
      setPublicImages: 'setPublicImages',
    }),
    updateImageUrls() {
      this.images = this.PublicImages.map(image => ({
        ...image,
        imageurl: this.HTTP + image.url,
        showInfo: false, // 新增属性用于控制信息框的显示
      }));
    },
    imageonload() {
      new PuBu({
        el: ".wf-content",
        column: 4,
        gap: 20,
      });
    },
    async fetchTags() {
      try {
        const response = await this.$http.get('/images/tags');
        this.tags = Array.isArray(response.data) ? response.data : [];
      } catch (error) {
        console.error('获取标签失败:', error);
      }
    },
     async searchImages() {
      try {
        this.isLoading = true;
        const response = await this.$http.get('/images/search', {
          params: { keyword: this.keyword },
          withCredentials: true,
        });
        console.log("搜索结果:", response.data);
        this.images = response.data.map(image => ({
          ...image,
          imageurl: this.$store.state.HTTP + image.url,
          showInfo: false, // 新增属性用于控制信息框的显示
        }));
        this.isLoading = false;
        if (this.images.length === 0) {
          this.$nextTick(() => {
            const noResults = document.querySelector('.no-results');
            noResults.classList.add('bounce-in');
          });
        }
      } catch (error) {
        console.error('搜索失败:', error);
        this.isLoading = false;
      }
    },
    searchByTag(tag) {
      this.keyword = tag;
      this.searchImages();
    },
    showInfo(index) {
      this.$set(this.images[index], 'showInfo', true);
    },
    hideInfo(index) {
      this.$set(this.images[index], 'showInfo', false);
    },
  },
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
}
.tags-container {
  margin: 10px 0;
}
.tag-item {
  cursor: pointer;
  margin-right: 5px;
}
.Waterfall {
  position: relative;
}
.wf-item {
  position: absolute;
  border: 5px solid white;
  box-shadow: -3px 2px 5px rgba(0, 0, 0, 0.5);
}
.wf-item img {
  height: 100%;
  width: 100%;
}
.image-container {
  position: relative;
}
.info-box {
  position: absolute;
  top: 0;
  left: -100%;
  width: 200px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: translateX(-10px);
  opacity: 0;
  transition: transform 0.2s, opacity 1s;
}
.show-info {
  transform: translateX(0);
  opacity: 1;
}
.no-results {
  font-size: 1.5em;
  text-align: center;
  margin-top: 20px;
  animation: bounce-in 1s ease-out;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

