<template>

<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="描述" value="1"></el-option>
      <el-option label="标签" value="2"></el-option>
      <el-option label="作者ID" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

</template>





<script>
export default {
  data() {
    return {
      input: '',
      select: ''
    }
  }
}
</script>


<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>