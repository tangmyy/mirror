<template>
  <div id="Home">
    <KinesisContainer>
      <KinesisElement :strength="100">
        <img alt="Vue logo" src="@/assets/mirror.png" class="animate__heartBeat" />
      </KinesisElement>
    </KinesisContainer>

    <!-- 问答交互 -->
    <h1>Ask the Big Model</h1>
    <input type="text" v-model="question" placeholder="Ask your question here" />
    <button @click="askQuestion">Ask</button>
    <p>
      Answer: <span>{{ answer }}</span>
    </p>

    <!-- 页码导航栏 -->
    <hr />
    <section>
      <b-pagination
        :total="total"
        v-model="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        :page-input="hasInput"
        :page-input-position="inputPosition"
        :debounce-page-input="inputDebounce"
      />
    </section>
    <hr />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      // 大模型
      question: "",
      answer: "", // 用于存储实时显示的回答
      // 页码导航栏
      total: 200, // 总记录数
      current: 1, // 当前页数
      perPage: 10, // 每页记录数
      rangeBefore: 2, // 前面有几页
      rangeAfter: 2, // 后面有几页
      order: "is-centered", // 升序或降序    is-right
      size: "is-medium", // 组件的大小  is-small is-medium   is-large
      isSimple: false, // 简化模式
      isRounded: true, // 圆角样式
      hasInput: true, // 页码输入框
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      inputPosition: "", // 页码输入框的位置
      inputDebounce: "500", // 页码输入的防抖时间
    };
  },

  computed: {
    ...mapState(["count", "todos", "UserID", "HTTP"]),
    ...mapGetters({
      // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
      ShuZu: "doneTodos",
      ShuZuCount: "doneTodosCount",
    }),
  },

  methods: {
    ...mapMutations({
      adddd: "add", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      abbbb: "abb",
    }),

    async askQuestion() {
      this.answer = ""; // 清空之前的回答
      try {
        const response = await this.$http.post(
          "/bigmodel/ask",
          {
            question: this.question,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );
        console.log("问答成功:", response.data);
        this.displayAnswer(response.data.answer);
      } catch (error) {
        console.error("问答失败:", error);
        this.answer = "Error: " + error.message;
      }
    },
    displayAnswer(answer) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < answer.length) {
          this.answer += answer[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100); // 每100毫秒显示一个字，可以根据需要调整时间间隔
    },
  },
};
</script>

<style scoped>
#Home {
  margin: 40px 0 0;
  color: #42b983;
  font-weight: bold;
  font-size: 44px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
