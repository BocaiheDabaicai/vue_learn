<template>
  <div id="app">
    <Caculate></Caculate>
    <hr/>
    <Person></Person>
  </div>
</template>

<script>
import Caculate from "@/components/Caculate";
import Person from "@/components/Person";

export default {
  name: 'App',
  components: {
    Caculate,
    Person
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*  display: flex;*/
/*  justify-content: space-around;*/
/*}*/
video{
  width: 100%;
}
</style>