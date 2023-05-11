<template>
  <input type="text" v-model="message" />
  <h2>{{message}}</h2>
</template>

<script>
import {ref,customRef} from 'vue'

export default {
  name: 'App',
  setup(){
    let message = TitleRef('title',500)
    function TitleRef(value,delay){
      let timer
      return customRef((track, trigger)=>{
        return{
          get(){
            console.log('get方法被调用')
            track() //通知Vue追踪数据的变化
            return value
          },
          set(newValue){
            console.log('set方法被调用')
            clearTimeout(timer) //清除之前的延时器，保证执行的是最后一个延时器
            timer=setTimeout(()=>{
              value = newValue
              trigger() //提醒Vue将模板重新渲染
            },delay)
          }
        }
      })
    }
    return{
      message
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
