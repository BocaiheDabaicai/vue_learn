<template>
  <div>
    <input type="text" v-model="name" placeholder="请输入人名" @keyup.enter="addPersonObj"/>
    <button @click="addPersonObj">添加</button>
    <button @click="addWangObj">添加一个姓王的人</button>
    <button @click="addAxios">从服务器添加一个人</button>
    <ul>
      <li v-for="(item) in personList" :key="item.id">{{ item.name }}</li>
    </ul>
    <h4>上方求和数为:{{ sum }}</h4>
    <h4>当前添加姓名的名称为:{{getSurname}}</h4>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('countOptions', ['sum']),
    ...mapState('personOptions', ['personList']),
    getSurname(){
      return this.$store.getters['personOptions/getsurname']
    }
  },
  methods: {
    ...mapActions('personOptions', ['addPerson','addAxiosServer']),
    addPersonObj() {
      // if (this.name==='') return alert('请输入人名')
      // this.personList.unshift({id:nanoid(),name:this.name})
      this.addPerson({id: nanoid(), name: this.name})
      this.name = ''
    },
    addWangObj() {
      this.$store.dispatch('personOptions/addWang', {id: nanoid(), name: this.name})
      this.name = ''
    },
    addAxios(){
      //添加actions中的方法一
      // this.addAxiosServer()
      this.$store.dispatch('personOptions/addAxiosServer')
    }
  }
}
</script>

<style scoped>

</style>