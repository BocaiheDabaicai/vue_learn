import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced:true,
    actions:{
        addPerson(context,value){
            if (value.name === '') return alert('请输入人名')
            context.commit('ADDPERSON',value)
        },
        addWang(context,value){
            if (value.name.indexOf('王') === 0){
                context.commit('ADDPERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addAxiosServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=zha').then(response=>{
                console.log(response.data)
                context.commit('ADDPERSON',{id:nanoid(),name:response.data})
            }).catch(error=>{
                console.log(error.messages)
            })
        }
    },
    mutations:{
        ADDPERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'安痛尼大卫'},
            {id:'002',name:'喔瑞克纳恩'},
            {id:'003',name:'笔斯你'}
        ]
    },
    getters:{
        getsurname(state){
            return state.personList[0].name.substring(0,1)
        }
    }
}