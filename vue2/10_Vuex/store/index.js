import Vuex from 'vuex'
import Vue from "vue";
import countOptions from "@/store/Options/countOptions";
import personOptions from "@/store/Options/personOptions";

Vue.use(Vuex)

// //加工数据
// const getters = {
//     bigSum(state){
//         return state.sum * 10
//     }
// }

//创建store,并暴露
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})