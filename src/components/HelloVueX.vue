<template>
    <div id="countpx">
        {{ count }}
        <el-row>
            <el-button type="success" icon="el-icon-check" circle @click="add"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="abb"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="print"></el-button>

        </el-row>
        <ul  class="animate__heartBeat">
            <li v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</li>
        </ul>
    </div>
</template>




<script>
import { mapState,mapGetters,mapActions } from 'vuex';
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
        add(){this.$store.commit("add")},
        abb(){this.$store.commit("abb")},
    }
    
}

</script>

<style scoped>
#countpx{
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
