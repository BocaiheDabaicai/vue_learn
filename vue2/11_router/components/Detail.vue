<template>
  <ol>
    <li>编号:{{ id }}</li>
    <li>标题:{{ title }}</li>
    <!--    <li>编号:{{ $route.params.id }}</li>-->
    <!--    <li>标题:{{ $route.params.title }}</li>-->
  </ol>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>