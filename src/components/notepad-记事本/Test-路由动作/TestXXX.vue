<template>
    <h1>测试页面{{ id }}</h1>                           <!-- 第二种获取方式  -->
    <!-- <h1>测试页面{{ $route.params.id }}</h1>  -->   <!-- {{ $route.params.id }} 是内置属性，可以获取到 :id -->
</template>





<script>
export default {
    name: 'TestXXX',
    props:["id"]
}
</script>


