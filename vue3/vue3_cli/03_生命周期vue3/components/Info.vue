<template>
  <h2>信息标签</h2>
  <h3>示例如下</h3>
  <h4>价格：{{price}}元/根</h4>
  <button @click="price++">更新数据</button>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";

export default {
  name: 'Info',
  setup(props,context){
    console.log('----setup----')
    onBeforeMount(()=>{
      console.log('----onBeforeMount----')
    })
    onMounted(()=>{
      console.log('----onMounted----')
    })
    onBeforeUpdate(()=>{
      console.log('----onBeforeUpdate----')
    })
    onUpdated(()=>{
      console.log('----onUpdated----')
    })
    onBeforeUnmount(()=>{
      console.log('----onBeforeUnmount----')
    })
    onUnmounted(()=>{
      console.log('----onUnmounted----')
    })

    let price = ref(30)
    return {
      price
    }
  },
  /*beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }*/
}
</script>
