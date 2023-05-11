<template>
  <div class="showBox">
    <button @click="changeShow">显示/隐藏</button>
    <transition name="box1" appear>
      <h2 v-show="isShow" class="come">我是站SHIPAI</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
  .showBox{
    background-color: #30f1b0;
  }
  .box1-enter-active{
    animation: scrolling 1s;
  }
  .box1-leave-active{
    animation: scrolling 1s reverse ;
  }
  @keyframes scrolling {
    from{
      transform:translateX(-100%)
    }
    to{
      transform:translateX(0)
    }
  }
</style>