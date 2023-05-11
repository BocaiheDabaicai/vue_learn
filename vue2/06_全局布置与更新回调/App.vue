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
import pubsub from "pubsub-js";

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
    changeName(id,dataItem){
      this.tables.forEach((item)=>{
        if(item.id === id){
          item.name=dataItem
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
  },
  mounted() {
    pubsub.subscribe('hello',function (data,a){
      console.log('这是一个优秀的年轻人',data,a)
    })
    // pubsub.subscribe('changeName',this.changeName)
    this.$bus.$on('changeName',this.changeName)
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
