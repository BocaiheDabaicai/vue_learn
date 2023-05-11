<template>
  <!-- 可以没有根标签 -->
  <h2>信息标签</h2>
  <h3>示例如下</h3>
  <h4>姓名:{{name}}</h4>
  <h4>年龄:{{age}}</h4>
  <h4>职位:{{work.career}}</h4>
  <h4>薪酬:{{work.salary}}</h4>
  <button @click="showMessage">点击查看消息</button>
  <button @click="changeMessage">点击修改信息</button>
  <h4>{{msg}}</h4>
  <button @click="test">测试emit</button>
  <h4>材料：{{list.lag}}</h4>
  <h4>描述：{{list.text}}</h4>
  <h4>价格：{{list.price}}元/根</h4>
  <h4>客人:{{list.guest}}</h4>
  <button @click="list.price++">更新数据</button>
</template>

<script>
import {ref,reactive,watch} from "vue";

export default {
  name: 'Info',
  // props和vue2中的一样，父组件传参，子组件接收
  // emits 填写绑定的事件名称，作用 告诉子组件接收该父组件事件
  props:['msg','school'],
  emits:['show'],
  setup(props,context){
    console.log('props',props.msg,props.school)
    console.log('context',context)
    let name=ref('okc')
    let age = ref(18)
    let work = ref({
      career:'高级java工程师',
      salary:'80k',
    })

    let list = reactive({
      lag:'木头',
      text:'橡树树木、樟树树木',
      price:30,
      guest:{
        name1:'威威',
        name2:'消息',
        name3:'爬爬'
      }
    })
    watch(()=>list.price,(newValue,oldValue)=>{
      console.log(`list的price数值发生改变`,newValue,oldValue)
    })


    function showMessage() {
      alert('发送消息')
    }
    function changeMessage() {
      name.value = 'phi'
      age.value = 24
      work.value.career='NodeJS全栈工程师'
      work.value.salary='80k'
    }
    function test() {
      context.emit('show','还好吗')
    }
    return {
      name,
      age,
      work,
      changeMessage,
      showMessage,
      test,
      list
    }
  }
}
</script>
