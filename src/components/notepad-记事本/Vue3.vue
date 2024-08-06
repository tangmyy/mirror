<template></template>

<script>
import axios from "axios";

async function getData() {
  const res = await axios({
    url: "https://ho2zhco252.hzh.sealos.run/test",
    method: "post",
    data: {
      // 这里是传入的数据
    },
  });

  console.log(res, "后端拿到的数据");
}
</script>
