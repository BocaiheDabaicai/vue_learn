<template>
  <div>
    <h2 v-text="msg" ref="test1"></h2>
    <button @click="showDom" ref="test2">点我显示消息</button>
    <school ref="test3"></school>
  </div>
</template>

<script>
import school from "@/components/Student";
export default {
  name: "App",
  components:{
    school
  },
  data(){
    return{
      msg:'欢迎来到沙巴'
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.test1)
      console.log(this.$refs.test2)
      console.log(this.$refs.test3)
    }
  }
}
</script>

<style scoped>

</style>