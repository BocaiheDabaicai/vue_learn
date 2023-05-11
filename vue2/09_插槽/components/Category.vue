<template>
  <div class="Mybox">
    <h2>{{title}}</h2>
    <slot name="center">如果没有传入值，此处会显示</slot>
    <slot name="footer">如果没有传入值，此处会显示</slot>
    <slot :bigData="bigData">如果没有传入值，此处会显示</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return{
      bigData:['我是作用域插槽','我是二号','三号']
    }
  }
}
</script>

<style scoped>
.Mybox{
  width:300px;
  height: 500px;
  background-color: #30f1f1;
}
h2{
  text-align: center;
  background-color: #e6f176;
}
img{
  width: 100%;
}
</style>