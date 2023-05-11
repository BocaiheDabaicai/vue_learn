<template>
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "school",
  data(){
    return{
      name:'沙巴',
      address:'昌平县',
    }
  }
}
</script>

<style scoped>

</style>