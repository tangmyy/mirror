<template>
  <div>
    <el-skeleton :rows="18" animated />
    <el-empty description="图片出差了..."></el-empty>


    <KinesisContainer>
      <KinesisElement :strength="10">我</KinesisElement>
      <KinesisElement :strength="20">无</KinesisElement>
      <KinesisElement :strength="30">敌</KinesisElement>
      <KinesisElement :strength="40">了</KinesisElement>
    </KinesisContainer>


  </div>
</template>

<script>

export default {
  name: "App",


  



};
</script>