<template>
  <li>
    <label>
      <input type="checkbox" :checked="itemObj.done" @click="change(itemObj.id)">
      <span>{{itemObj.name}}</span>
    </label>
    <button @click="throwObj(itemObj.id)">删除当前项</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:['itemObj','changeDone','deleteDone'],
  methods:{
    change(id){
      this.changeDone(id)
    },
    throwObj(id){
      console.log(id)
      this.deleteDone(id)
    }
  }
}
</script>

<style scoped>
  li button{
    display:none
  }
  li:hover{
    background-color: antiquewhite;
  }
  li:hover button{
    display: block;
  }
</style>