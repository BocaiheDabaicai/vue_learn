<template>
  <div id="app">
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="goMuch">go,可前进可后退</button>
    <hr/>
    <div class="buttonBox">
<!--   路由连接   -->
      <router-link to="/home">
        <button>Home</button>
      </router-link>
<!--   路由命名使用方式一，简化路由跳转模式   -->
      <router-link :to="{name:'about'}">
        <button>About</button>
      </router-link>
    </div>
<!--  路由视图  -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";

export default {
  name: 'App',
  components: {
    Home,
    About
  },
  mounted(){
    // console.log(this)
  },
  methods:{
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back()
    },
    goMuch(){
      //填入负数实现后退
      this.$router.go(2)
    }
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
.buttonBox{
  display: flex;
  margin-top: 20px;
  gap: 20px;
}
video{
  width: 100%;
}
</style>