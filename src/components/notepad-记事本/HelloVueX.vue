<template>
    <div id="helloVueX">
        <img alt="Vue logo" src="@/assets/MirrorLogo.png">
        {{ count }}
        <el-row>
            <el-button type="success" icon="el-icon-check" circle @click="abb"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="add"></el-button>
            <!-- <el-button type="success" icon="el-icon-check" circle @click="adddd"></el-button> -->
        </el-row>
        <ul  class="animate__heartBeat">
            <li v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</li>
        </ul>
    </div>
</template>




<script>

import { mapState,mapGetters,mapMutations } from 'vuex';

export default{
    name: 'HelloVueX',
    computed:{
        ...mapState([
            'count','todos'
        ]),
        ...mapGetters([
            'doneTodos'
        ]),
    },

    methods:{
        add(){this.$store.commit("add", 5)},
        abb(){this.$store.commit("abb", 5)},
        // ...mapMutations([
        //     'add', // 将 `this.add()` 映射为 `this.$store.commit('add')`
        //     // `mapMutations` 也支持载荷：
        //     'abb', // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
        // ]),
        // ...mapMutations({
        //         adddd: 'add', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        //         abbbb: 'abb',
        // })
    }
    
}

</script>

<style scoped>
#helloVueX{
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
