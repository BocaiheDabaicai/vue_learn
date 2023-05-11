<template>
  <div id="app">
    <h2>1234</h2>
    <Show/>
    <moveShow/>
    <installShow/>
  </div>
</template>

<script>
import Show from './components/Show'
import moveShow from './components/moveShow'
import installShow from './components/installShow'

export default {
  name: 'App',
  components: {
    Show,
    moveShow,
    installShow
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
