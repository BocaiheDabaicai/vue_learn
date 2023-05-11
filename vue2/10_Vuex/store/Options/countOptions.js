export default {
    namespaced:true,
    actions:{
        addODD(context,value){
            if (context.state.sum%2){
                context.commit('ADD',value)
            }
        },
        addWait(context,value){
            setTimeout(()=>{
                context.commit('ADD',value)
            },500)
        },
    },
    mutations:{
        ADD(state,value){
            // console.log('mutations',state,value)
            state.sum+=value
        },
        SUB(state,value){
            // console.log('mutations',state,value)
            state.sum-=value
        },
    },
    state:{
        sum:0,
        school:'大卫分',
        classes:'体育'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}