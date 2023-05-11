<template>
  <div id="app">
    <Head :receive="receive"></Head>
    <List :tables="tables" :changeDone="changeDone" :deleteDone="deleteDone"></List>
    <Footer :tables="tables" :seleceAll="seleceAll" :clearAll="clearAll"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import List from "@/components/List";
import Head from "@/components/Head";

export default {
  name: 'App',
  components: {
    Head,
    List,
    Footer
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
  methods:{
    receive(tableObj){
      console.log(tableObj)
      this.tables.unshift(tableObj)
    },
    changeDone(id){
      this.tables.forEach((item) => {
        if(item.id === id){
          item.done = !item.done
        }
      })
    },
    deleteDone(id){
       this.tables = this.tables.filter((item) => {
        return item.id !== id
      })
    },
    seleceAll(checked){
      this.tables.forEach((item) => {
        item.done = checked
      })
    },
    clearAll(){
      this.tables = this.tables.filter((item) => {
        return !item.done
      })
    }
  }
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
