<template>
  <h2>信息标签</h2>
  <h3>示例如下</h3>
  <h4>价格：{{price}}元/根</h4>
  <button @click="price++">更新数据</button>
  <hr>
  <h4>当前鼠标点击坐标为 x:{{point.x}} y:{{point.y}}</h4>
</template>

<script>
import {ref} from "vue";
import usePoint from "@/hooks/usePoint";

export default {
  name: 'Info',
  setup(props,context){
    let price = ref(30)
    let point = usePoint()
    return {
      price,
      point
    }
  },
}
</script>