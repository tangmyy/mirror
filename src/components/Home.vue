<template>
  <div id="Home">
    <KinesisContainer>
      <KinesisElement :strength="100">
        <img alt="Vue logo" src="@/assets/mirror.png" class="animate__heartBeat">
      </KinesisElement>
    </KinesisContainer>

    <p>{{ ShuZuCount }}</p>
    <p>{{ count }}</p>
    <el-row>
      <el-button type="success" icon="el-icon-check" circle @click="() => abbbb(1)"></el-button>
      <el-button type="success" icon="el-icon-check" circle @click="() => adddd(1)"></el-button>
    </el-row>
    <ul  class="animate__heartBeat">
      <li v-for="todo in ShuZu" :key="todo.id">{{ todo.text }}</li>
    </ul>
    
  </div>
</template>




<script>

import { mapState,mapGetters,mapMutations } from 'vuex';

export default{
  name: 'Home',

  computed:{
    ...mapState([
        'count',
        'todos',
    ]),
    ...mapGetters({                  // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
      ShuZu: 'doneTodos',
      ShuZuCount: 'doneTodosCount',
    }),
  },

  methods:{
    ...mapMutations({
      adddd: 'add', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      abbbb: 'abb',
    })
    // @click="add"
    // @click="abb"
    // add(){this.$store.commit("add", 5)},
    // abb(){this.$store.commit("abb", 5)},
  }
  
}

</script>

<style scoped>
#Home{
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
