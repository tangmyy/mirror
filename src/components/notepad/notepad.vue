<template>
  <div>
<!-- 1.2 插值表达式 -->
    <p>{{ title }}</p>
    <p>{{ content }}</p>
<!-- 1.3 methods属性 -->
    <p>{{ output() }}</p>
    <p>{{ output() }}</p>
<!-- 1.4 computed计算属性 ps: 无()。 -->
    <p>{{ outputContent }}</p>
    <p>{{ outputContent }}</p>
<!-- 1.5 监听器 -->
    <p>{{ title }}</p>
<!-- 1.6 指令 -->
<!-- 内容指令 -->
    <!-- <p v-text="htmlContent">123</p>
    <p v-html="htmlContent">123</p> -->
<!-- 渲染指令 -->
    <!-- <p v-for="item" in 5>这是内容</p>
    <p v-for="item" in arr>这是内容:{{ item }}</p>
    <p v-for="(item, key, index)" in arr>这是内容:{{ item }}{{ key }}{{ index }}</p> -->
    <p v-if="false">标签内容</p>
    <p v-show="false">标签内容</p>
    <p v-if="bool">标签内容</p>
    <p v-show="bool">标签内容</p>
<!-- 属性指令 -->
    <p title="title">这是标题</p>
    <p v-bind:title="标题">这是标题</p>
    <p :title="标题">这是标题</p> 语法糖
<!-- 事件指令 -->
  <burron v-on:click="ourput">按钮</burron>    
  <burron @click="ourput">按钮</burron>   语法糖
<!-- 表单指令: v-model可以实现双项数据绑定 --> 
  <burron type="text" v-model="inputValue"></burron>    
  <p v-text="inputValue"></p>
<!-- 5. 修饰符 -->
  <burron type="text" v-model.trim="inputValue"></burron>    

  </div>
</template>
<script>
// 导出
export default {
// 1. data：定义组件的响应式数据。
  data(){
    return{
      title: '这是标题文本',
      content: '这是内容文本',
      
      htmlContent: '这是一个<span>span</span>标签',
      arr: ['a', 'b', 'c', 'd'],
      obj: {a:10, b:20, c:30, d:40},
      bool: true,
      inputValue:'默认内容',
    }
  },
  // 2. methods：定义组件的方法。
  methods: {
    output(){
      console.log("methods执行了");
      return '标题为：' +this.title +'内容为：' +this.content
    }
  },
  // 3. computed：定义计算属性(具有缓存性)
  computed: {
    outputContent(){
      console.log("computed执行了");
      return '标题为：' +this.title +'内容为：' +this.content
    }
  },
  // 4. watch：监听器
  watch:{
    title(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  }
// store.state 来获取状态对象，
// store.commit 方法触发状态
// 路由的数据传递


// export default{
//   name: 'TestOne',
  // created (){
  //   setTimeout(()=> {
  //     this.$router.push({ name:'TestTwo', query:{someData:'我是TestOne过来的'} })
  //   }, 3000)
  //   console.log(this.$route.query)
  // }
// }
// $router 路由动作

// export default{
//   name: 'TestTwo',
//   created (){
//     console.log(this.$route.query)
//   }
// }
// $route 路由数据

// 全局守卫  // (目的地, 始发地, 是否继续)
// router.beforeEach((to, from, next)=> {
//   console.log("路由触发了")
//   next()
// })

  // 5. 中央仓库 store

  // 5.2 methods：定义组件的方法。
  // methods: {
  //   ...mapMutations(['login']), // 其实可以写一起，用逗号隔开...
  //   ...mapMutations(['logout']),
  // },

  // 5.3 computed：定义计算属性(具有缓存性)
  // computed:{
  // ...mapState([
  //  'count',
  //  'todos'，
  // ]),
  // 
  //   // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
  //   ...mapGetters([
  //       'doneTodos',
  //       'doneTodosCount'
  //   ]),
  //   ...mapGetters({
  //     doneTodos: 'doneTodos',
  //     doneCount: 'doneTodosCount',
  //   }),
  // },


// 5. props：定义组件的输入属性。
// 6. mounted：生命周期钩子，在组件挂载后调用。
// 7. components：局部注册子组件。

// 8. filters：局部注册过滤器。
// 9. mixins：使用混入来复用代码。
// 10. provide 和 inject：依赖注入。


}
</script>

