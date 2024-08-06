<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 500)
      }
    }
  }
</script>

<style>
.infinite-list-wrapper {
  max-height: 300px;
  border: 1px solid #ddd;
  padding: 10px;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

p {
  text-align: center;
  margin-top: 10px;
}
</style>