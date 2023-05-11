<template>
  <ul>
    <li>new1<input type="text" /></li>
    <li>new2<input type="text" /></li>
    <li>new3<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  activated() {
    console.log('路由组件被激活')
  },
  deactivated() {
    console.log('路由组件被失活')
  }
}
</script>

<style scoped>

</style>