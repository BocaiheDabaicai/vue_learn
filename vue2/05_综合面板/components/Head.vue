<template>
  <div>
    <label>
      <input type="text" placeholder="请输入行为" v-model="detail" @keydown.enter="add"/>
    </label>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "Head",
  data(){
    return{
      detail:''
    }
  },
  props:['receive'],
  methods:{
    add(){
      if (!this.detail.trim()) return alert('输入不能为空')
      const title = {id:nanoid(),name:this.detail,done:false}
      this.receive(title)
      this.detail=''
    }
  }
}
</script>

<style scoped>

</style>