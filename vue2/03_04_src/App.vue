<template>
  <div>
    <Student name="张三" :age="21" sex="男"></Student>
  </div>
</template>

<script>
import Student from "@/components/Student";
export default {
  name: "App",
  components:{
    Student
  }
}
</script>

<style scoped>

</style>