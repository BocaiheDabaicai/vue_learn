<template>
  <ul>
    <li v-for="(item) in routeList" :key="item.id">
      <!--   方式一：直接在链接中添加query参数   -->
      <!--      <router-link :to="`/home/message/detail?id=${item.id}&&title=${item.title}`">{{item.title}}</router-link>-->
      <!--   方式二：对象方式添加 path、query 参数   -->
            <router-link :to="{
              // path:'/home/message/detail',
              name:'detail',
              query:{id:item.id,title:item.title}
            }">
              {{ item.title }}
            </router-link>
      <button @click="pushShow(item)">push查看</button>
      <button @click="replaceShow(item)">replace查看</button>
      <hr/>
      <!--   方式三：直接在链接中添加 params 参数   -->
      <!--      <router-link :to="`/home/message/detailparams/${item.id}/${item.title}`">{{item.title}}</router-link>-->
      <!--   方式四：对象方式添加 name、params 参数   -->
      <!--            <router-link :to="{name:'detailparams',params:{id:item.id,title:item.title}}">-->
      <!--              {{ item.title }}-->
      <!--            </router-link>-->
    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      routeList: [
        {id: '001', title: 'message1'},
        {id: '002', title: 'message2'},
        {id: '003', title: 'message3'}
      ]
    }
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name:'detail',
        query:{id:item.id,title:item.title}
      })
    },
    replaceShow(item){
      this.$router.replace({
        name:'detail',
        query:{id:item.id,title:item.title}
      })
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('在进入Message之前')
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log('在离开Message之前')
    next()
  }
}
</script>

<style scoped>

</style>