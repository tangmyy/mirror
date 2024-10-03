# mirror(Vue2 +router +vuex +mock ++SpringBoot)(前后端分离)
# 前端项目在主页 Mirror_realm
---
 **组件**
- ElementUI
- Buefy
  
**动效**
- animate.css
- vue-kinesis

**瀑布流**
- vue-masonry
---
## Hello, 这是一个图片在线相册(支持GIF格式)

### 公共相册(瀑布流展示)(有动效) 

### 私人相册(类似后台管理) 

### 图片上传 (生成ins风图卡)(能够在线预览)

### 2024.8.19测试: 接入大模型([大模型地址](https://xinghuo.xfyun.cn/sparkapi))

目前已知问题(大模型):

*后台输出与前端输出非异步进行, 前端需要等待后端输出完成才开始输出答案*

*遇到一些较长的回答需要等待较长时间(非卡顿)*



- **主要实现基本的增删改查**
- **图片拥有 描述 标签**
- **公共相册可以关键字搜索**
- **公共相册可以标签搜索**

---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
