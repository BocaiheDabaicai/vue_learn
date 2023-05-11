<template>
  <div v-show="totalFinished">
    <input type="checkbox" :checked="isAll" @click="selectChange">
    <label>当前 {{ countFinished }} / 全部 {{ totalFinished }}</label>
    <button @click="clearAllData">全部清除</button>
    <button @click="subscribe">获取订阅消息</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Footer",
  props: ['tables','seleceAll','clearAll'],
  computed: {
    isAll() {
      return this.countFinished === this.totalFinished && this.totalFinished > 0
    },
    countFinished() {
      //  完整写法,reduce是统计函数，pre参数使用初始值0，current是数组项对象
      // const sum = this.tables.reduce((pre,current) => {
      //   return pre+(current.done?1:0)
      // },0)
      // return sum
      return this.tables.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    totalFinished() {
      return this.tables.length
    }
  },
  methods:{
    selectChange(e){
      console.log(e.target.checked)
      this.seleceAll(e.target.checked)
    },
    clearAllData(){
      this.clearAll()
    },
    subscribe(){
      pubsub.publish('hello',90)
    }
  }
}
</script>

<style scoped>

</style>