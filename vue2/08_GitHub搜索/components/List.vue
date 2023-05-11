<template>
  <div>
    <Item v-for="(itemObj) in realList"
          :key="itemObj.id"
          :name="itemObj.login"
          :avatar="itemObj.avatar_url"
          :htmlUrl="itemObj.html_url"
          v-show="!isFirst&&!isLoading"
    />
    <h2 v-show="isFirst">WelCome to the miniWeb!!</h2>
    <h2 v-show="isLoading">Loading...</h2>
    <h2 v-show="errorMessage">{{errorMessage}}</h2>
  </div>
</template>

<script>
import Item from "@/components/Item"

export default {
  name: "List",
  components: {Item},
  data() {
    return {
      isFirst:true,
      isLoading:false,
      errorMessage:'',
      realList: []
    }
  },
  methods: {
    changeFirst(){
      this.isFirst = false
    },
    changeLoading(){
      this.isLoading = !this.isLoading
    },
    setError(msg){
      this.changeLoading()
      this.errorMessage = msg
      console.log(this.errorMessage)
    },
    setData(list) {
      this.changeLoading()
      this.errorMessage = ''
      this.realList = list
      console.log(this.realList)
    }
  },
  mounted() {
    this.$bus.$on('setData', this.setData)
    this.$bus.$on('changeFirst', this.changeFirst)
    this.$bus.$on('changeLoading', this.changeLoading)
    this.$bus.$on('setError', this.setError)
  }
}
</script>

<style scoped>

</style>