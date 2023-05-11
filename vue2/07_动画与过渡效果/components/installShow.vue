<template>
  <div class="showBox">
    <button @click="changeShow">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce" enter-active-class="animate__swing" leave-active-class="animate__backOutUp" appear>
      <h2 v-show="isShow" class="come" key="1">我是站SHIPAI</h2>
    </transition-group  >
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "installShow",
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
    background-color: #def130;
  }
</style>