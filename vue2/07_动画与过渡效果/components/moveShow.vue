<template>
  <div class="showBox">
    <button @click="changeShow">显示/隐藏</button>
    <transition-group name="box1" appear>
      <h2 v-show="isShow" class="come" key="1">我是站SHIPAI</h2>
      <h2 v-show="isShow" class="come" key="2">我是站SHIPAI</h2>
    </transition-group  >
  </div>
</template>

<script>
export default {
  name: "moveShow",
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
    background-color: #30f1f1;
  }
  .box1-enter-active,.box1-leave-active{
    transition: 1s;
  }
  .box1-enter,.box1-leave-to{
    transform: translate(-100%);
  }
  .box1-enter-to,.box1-leave{
    transform: translate(0);
  }
</style>