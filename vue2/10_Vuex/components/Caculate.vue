<template>
  <div>
    <h2>当前求和值为:{{sum}}</h2>
    <h4>当前求和值的10倍为:{{bigSum}}</h4>
    <h3>我系在{{school}},上{{classes}}</h3>
    <h4>下方列表人数为:{{personList.length}}</h4>
    <select v-model="countData">
      <option :value="1">1</option>
      <option :value="3">3</option>
      <option :value="5">5</option>
    </select>
    <button @click="addData(countData)">点我加</button>
    <button @click="subData(countData)">点我减</button>
    <button @click="addCondi(countData)">奇数加</button>
    <button @click="addTemp(countData)">延时加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Caculate",
  data(){
    return{
      countData:1,
    }
  },
  computed:{
    //mapState 对象写法
    // ...mapState({xuexiao:'school',xueke:'class'})
    //mapState 数组写法
    ...mapState('countOptions',['school','classes','sum']),
    ...mapState('personOptions',['personList']),
    //----------------------------
    //mapGetters 对象写法
    // ...mapGetters({dashuju:'bigSum'})
    //mapGetters 数组写法
    ...mapGetters('countOptions',['bigSum'])
  },
  methods:{
    //手动写法
    // addData(){
    //   this.$store.commit('ADD',this.countData)
    // },
    // subData(){
    //   this.$store.commit('SUB',this.countData)
    // },
    //mapMutations 对象写法，存在数组写法，写法同上
    ...mapMutations('countOptions',{addData:'ADD',subData:'SUB'}),
    //mapAcations 对象写法，存在数组写法，写法同上
    ...mapActions('countOptions',{addCondi:'addODD',addTemp:'addWait'}),
    // addCondi(){
    //   this.$store.dispatch('addODD',this.countData)
    // },
    // addTemp(){
    //   this.$store.dispatch('addWait',this.countData)
    // }
  }
}
</script>

<style scoped>

</style>