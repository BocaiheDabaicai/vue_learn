<template>
  <div>
    <a :href="htmlUrl" target="_blank">
      <img :src="avatar" alt="test for Item"/>
    </a>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Item",
  props:['name','avatar','htmlUrl']
}
</script>

<style scoped>

</style>