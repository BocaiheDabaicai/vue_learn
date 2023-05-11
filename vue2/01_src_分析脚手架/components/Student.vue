<template>
  <div>
    <h2>学生名称:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "student-component",
  data(){
    return{
      name:'goClot',
      age:17
    }
  }
}
</script>

<style scoped>

</style>