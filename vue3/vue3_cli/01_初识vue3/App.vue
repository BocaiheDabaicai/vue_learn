<template>
<!-- 可以没有根标签 -->
  <h2>信息标签</h2>
  <h3>示例如下</h3>
  <h4>姓名:{{name}}</h4>
  <h4>年龄:{{age}}</h4>
  <button @click="showMessage">点击查看消息</button>
</template>

<script>
  import {h} from 'vue'

export default {
  name: 'App',
  setup(){
    let name='okc'
    let age = 18
    function showMessage() {
      alert('发送消息')
    }
    // 返回一个对象
    return {
      name,
      age,
      showMessage
    }
    // 返回一个渲染函数(很少使用)
    // return ()=>h('h1','哈哈哈')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
