<template>
  <Info @show="Message" :msg="msg" :school="school"></Info>
</template>

<script>
import Info from '@/components/Info'

export default {
  name: 'App',
  components:{
    Info
  },
  setup() {
    let msg = '你好啊'
    let school = '丽江三中'
    function Message(value){
      alert(`你点击出发了按钮事件，值为:${value}`)
    }
    return {
      msg,
      school,
      Message
    }
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
