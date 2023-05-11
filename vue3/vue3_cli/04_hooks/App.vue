<template>
  <button @click="changeStatus" style="text-align: left">{{isShow?'隐藏':'展示'}}</button>
  <Info v-if="isShow"></Info>
</template>

<script>
import Info from '@/components/Info'
import {ref} from 'vue'

export default {
  name: 'App',
  components:{
    Info
  },
  setup(){
    let isShow = ref(true)

    function changeStatus(){
      isShow.value = !isShow.value
    }
    return{
      isShow,
      changeStatus
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
