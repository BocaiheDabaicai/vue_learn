<template>
  <div>
    <h4>我是Home组件</h4>
    <router-link to="/home/news">
      <button>
        news
      </button>
    </router-link>
    <router-link to="/home/message">
      <button>
        messages
      </button>
    </router-link>
    <!--  组件缓存标签，使路由组件不被销毁，include中放入组件name进行激活  -->
    <!--  被激活的组件可以使用两个生命周期钩子，activated,deactivated  -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>