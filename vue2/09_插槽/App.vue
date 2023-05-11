<template>
  <div id="app">
    <Category :title="title1">
      <img slot="center" src="https://ts1.cn.mm.bing.net/th/id/R-C.92d051da16796af841aa4e7c0a19994b?rik=6yNNLdnfAWy1Rg&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50077%2f0923.jpg_wh1200.jpg&ehk=7rFIKLa41Uk8ZwNgbb7RfBxV5O3Zt9FUVPCMzo8ZwbY%3d&risl=&pid=ImgRaw&r=0" alt="">
      <a slot="footer" href="https://www.baidu.com">更多...</a>
      <template scope="bigData">
        <ul>
          <li v-for="(item,index) in bigData.bigData" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category :title="title2">
      <ul slot="center">
        <li v-for="(item,index) in tables2" :key="index">{{item}}</li>
      </ul>
      <a slot="footer" href="https://www.baidu.com">更多asdcsa</a>
      <template scope="bigData">
        <ol>
          <li v-for="(item,index) in bigData.bigData" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category :title="title3">
      <video slot="center" controls src="https://vt1.doubanio.com/202212291003/960cdb2a995eb8b93a79e276db35194d/view/movie/M/402980885.mp4"></video>
      <a slot="footer" href="https://www.baidu.com">更多内容</a>
      <template scope="bigData">
          <h4 v-for="(item,index) in bigData.bigData" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: 'App',
  components: {
    Category
  },
  data(){
    return{
      title1:'Orc',
      title2:'CUU',
      title3:'BBJ',
      tables2:['asd122','242344','gdfgfd']
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
  display: flex;
  justify-content: space-around;
}
video{
  width: 100%;
}
</style>