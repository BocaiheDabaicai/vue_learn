<template>
  <div>
    <h2>Search GitHub Users</h2>
    <input type="text" v-model="textSearch"/>
    <button @click="searchUsers">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data(){
    return{
      textSearch:''
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit('changeFirst')
      this.$bus.$emit('changeLoading')
      axios.get(`https://api.github.com/search/users?q=${this.textSearch}`).then(response=>{
        console.log(response.data.items)
        this.$bus.$emit('setData',response.data.items)
      }).catch(error=>{
        console.log(error)
        this.$bus.$emit('setError',error.message)
      })
    }
  }
}
</script>

<style scoped>

</style>