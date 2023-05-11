<template>
  <div id="app">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/List";

export default {
  name: 'App',
  components: {
    Search,
    List
  },
  data(){
    return{
      tables:[
        {id:'001',name:'foucey',done:false},
        {id:'002',name:'query',done:true},
        {id:'003',name:'binary',done:false}
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
