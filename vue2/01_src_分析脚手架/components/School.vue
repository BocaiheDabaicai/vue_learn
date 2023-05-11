<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <hr/>
    <h2>学校名称:{{name}}</h2>
    <h2>学校位置:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "school-component",
  data(){
    return{
      name:'沙巴',
      address:'平昌县'
    }
  }
}
</script>

<style scoped>

</style>