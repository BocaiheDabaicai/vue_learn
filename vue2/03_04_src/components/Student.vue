<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge}}</h2>
    <button @click="updateAge">点我年龄加一</button>
  </div>
</template>

<script>
export default {
  name: "school",
  data(){
    return{
      msg:'我是一个学生',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  },
  // 简单表达式,声明数据名称
  props:['name','age','sex']
  // 一般表达式，声明数据名称以及数据类型
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  // 完整表达式，声明数据名称以及数据类型、必要性限制（必要性、默认值）
  // props:{
  //   name:{
  //     type:String,
  //     required:true
  //   },
  //   sex:{
  //     type:String,
  //     required:true
  //   },
  //   age:{
  //     type:Number,
  //     default:99
  //   }
  // }
}
</script>

<style scoped>

</style>