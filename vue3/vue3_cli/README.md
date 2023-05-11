# Vue3
## 启动方式
### vue create <文件名> ---- Vue-cli
### npm init vite-app <文件名> ---- Vite
```
    Vue-cli下
        main.js
            不支持vue2入口文件写法
            使用createApp工厂函数
            入口对象属性相比vue2的入口对象更简洁
            vue组件可以不使用根标签
```
## setup函数
```
    setup是一个函数
        可以布置变量、函数等等内容
        通过return返回变量名称进行使用
        很少用于返回渲染函数
    setup(){
        //普通使用
        let a=1
        function b(){}
        return {a,b}
        //渲染使用
        外部接入 import {h} from 'vue'
        return ()=>h(标签名,内容)
    }
```
## setup函数拓展
```
    setup 函数在beforeCreate之前为undefined  
    setup(props,context){
        // props接收注册后的props参数
        // context能够接收props参数、slots内容、emit自定义事件
        // context.attrs 得到props参数
        // context.slots 得到插槽内容
        // context.emit 触发自定义事件
    }
    自定义事件说明
        //父组件注册触发事件
        <Test @aaa="getInfo"></Test>
        //子组件的响应
        emits:['aaa']   //目前多余，可以不写
        setup(props,context){
            context.emit('aaa',传入的参数)
        }
```
## ref函数
```
    ref创建一个数据对象,在对象中使用value属性修改值，
    该修改引用原型对象上的get或set方法
    使用方法
        导入
            import {ref} from 'vue'
        使用(在setup中使用)
            let a = ref('数据')
            let b = ref({
                text1:'aaa',
                text2:'bbb'
            })
        修改数据
            a.value = '书局'
            b.value.text1 = 'ccc'
```
## reactive函数
```
    reactive函数可以创建一个Proxy的实例对象(与Es6相关),
    用于引用对象或数组数据
    使用方法
        导入
            import {reactive} from 'vue'
        使用
            let a = reactive({
                text1:'aaa'
                text2:'bbb'
            })
            let b = reactive(['aaa','bbb'])
        修改数据
            a.text1 = 'ccc'
            b[0] = 'qqq'    //相比于vue2,数组可以进行索引式修改
```
## computed计算属性
```
    import {computed} from 'vue'
    setup(){
        //简写形式
        let a = computed(()=>{
            return '内容'
        })
        //完整形式
        let b = computed({
            get(){
                return '内容'
            }
            set(value){
                //设置内容操作
            }
        })
    } 
```
## watch监视属性
```
    监视属性
        引入
            import {watch} from 'vue'
        使用
            setup(){
                let sum=0
                let test=1
                //监视单个响应数据
                watch(sum,(newValue,oldValue)=>{
                    //此处检测数据变化
                })
                //监视多个响应数据
                watch(['sum','test'],(newValue,oldValue)=>{
                    //会显示数组内部的响应数据变化
                },immediate:true) //该选项会使监视属性在初始化时执行一次
            }
        注意点
            监视对象存在的问题
                let list = reactive({
                  lag:'木头',
                  guest:{
                    name1:'威威',
                    name2:'消息',
                    name3:'爬爬'
                  }
                })
                //监视对象中的一个属性
                watch(()=>list.lag,(newValue,oldValue)=>{
                    //可以正确获取newValue,oldValue
                })
                //监视对象中的多个属性
                watch([()=>list.lag,()=>list.guest.name1],(newValue,oldValue)=>{
                    //可以正确获取newValue,oldValue
                })
                // 直接监视对象,深度模式会自动开启且无法关闭
                // reactive定义的响应式数据，
                    若监视的是数据,deep强制开启
                    若监视的是数据的属性,deep正常配置
                watch(list,(newValue,oldValue)=>{
                    //无法获取oldValue
                },{deep:false})
        补充点
            watch接收的是响应式对象，避免接收纯数据
```
## watchEffect函数
```
    监视函数
        引入
            import {watchEffect} from 'vue'
        使用
            let a = ref(1)
            // 用到的属性会被监视
            watchEffect(()=>{
                const x = a.value   // 触发对响应式对象a的监控
                // 进行一系列操作
            })
            return {
                a
            }
```
## vue3生命周期
```
    vue3支持vue2的生命周期写法
    vue3的使用方式
        引入
            import {
                onBeforeMount,onMounted,
                onBeforeUpdate,onUpdated,
                onBeforeUnmount,onUnmounted
            } from 'vue'
        使用
            setup(){
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
            }
        说明
            beforeCreate与created由setup替代
            最后的生命周期钩子变成
                beforeDestroy => beforeUnmount
                destroyed => unmounted
```
## 自定义hook
```
    自定义函数，并实现复用
    首先
        在src下，创建hooks文件夹
        在里面写入useXXX.js文件
    内容(.js)
        //可以使用生命周期，响应式函数(ref,ractive)
        //可以接收参数
        export default function () {
            //定义数据，并进行一些数据处理  
            return 返回数据
        }
    引入 
        import useTest from '@/hoos/useTest'
    使用
        setup(){
            //获得数据
            let a = useTest()
            return {a}
        }
```
## toRef与toRefs
```
    引用响应式对象，使用内部的属性
    说明
        toRef(对象名,对象键值[字符串])    单个属性引用
        toRefs(对象名)                 整个属性引用，只引用第一层属性
    导入
        import {toRef,toRefs} from 'vue'
    使用
        setup(){
            let person = {
                name:'test',
                age:19,
                hobby:'eat'
            }
            return{
                //toRef使用方法
                name:toRef(person,'name'),
                age:toRef(person,'age'),
                hobby:toRef(person,'hobby')
                //---------------
                //toRefs使用方法,将每个第一层属性拆分成引用响应式对象
                ...toRefs(person)
            }
        }
    模板
        实现直接使用
        <h4>{{name}}</h4>
```
## customRef自定义触发
```
    customRef
        自定义Ref函数
        引入
            import {customRef} from 'vue'
        使用
            setup(){
                function myRef(value){   //创建函数，接收value参数 
                    return customRef((track,trigger)=>{  //接收track,trigger参数
                        return{
                            get(){
                                track() //通知Vue追踪数据的变化
                                return value
                            },
                            set(newValue){  //接收改变后的值
                                value = newValue    //替换
                                trigger() //提醒Vue将模板重新渲染
                            }
                        }    //返回get,set函数
                    })   //返回customRef函数
                }
                let a = myRef('text')
                return{
                    a
                }
            }
        意义
            能够封装一些自己的方法在自定义ref里面进行使用
            实现延时触发
```
## provide与inject
```
    实现前代组件与后代组件之间的通讯
    简介
        provide('注册名',要传递的参数)
        inject('注册名')   //返回对象
    使用
        ----App.vue 注册参数----
        import {ref,provide} from 'vue'
        ...
        setup(){
            let a = ref(100)
            provide('numberTest',a)
        }
        ----Test.vue 接收参数----
        import {inject} from 'vue'
        ...
        setup(){
            let b = inject('numberTest')
        }
```
----
### 不常用:shallowRef、shallowReactive
```
    shallowRef
        轻度生成响应式对象
        对象数据不进行响应式处理
        用法与Ref一致
        若接受对象，只能进行对象替换
            例如:
                let a = shallowRef({x:1})
                a = {y:2}
    shallowReactive
        轻度生成响应式对象
        只有第一层数据被生成响应式对象
        用法与reactive一致
```
### 不常用:readonly与shallowReadonly
```
    readonly
        将响应式对象改为只读的响应式对象
        深只读
    shallowReadonly
        将响应式对象的第一层改为只读
    使用场景
        不希望改动数据
```
### 推荐使用:toRaw与markRaw
```
    toRaw
        接收一个reactive响应式对象，将其变成普通数据对象
    markRaw
        标记一个普通对象，使其不能被改变为响应式对象
        使用场景:
            处理庞大数据时使用
            提高运行效率
```
### 有用方法:判断响应式对象
```
    isRef 判断是否为ref对象
    isReactive 判断是否为reactive对象
    isReadonly 判断reactive对象是否只
    isProxy 判断是否引用proxy对象
```
----
#### 拓展:数据劫持
```
    通过Object.defineProperty()方法对属性的读取、修改进行拦截
```
#### 拓展:Vue3响应式原理
```
    实现原理:
        通过Proxy函数:劫持对象中任意属性的变化
        通过Reflect函数:对劫持对象进行添加、删除、修改等操作
    示例代码:
        const a = Proxy(person,{
            // target 为源对象，propName是获取的属性名
            get(target,propName){
                return Reflect.get(target,propName)
            }
            // value是修改值
            set(target,propName,value){
                return Reflect.set(target,propName,value)
            }
            deleteProperty(target,propName){
                return Reflect.deleteProperty(target,propName)
            }
        }) 
```
#### 数据抖动与防抖
```
    数据抖动
        在处于多次更新数据的情况下，由于代码逻辑不严谨，
        导致最后获取的数据与实际不符
    防抖
        在多次更新的情况下，关闭之前需要触发的更新事件
        例如:
            clearTimeout()  关闭延时触发事件
        
```
#### Vue3的组合式api优势
```
    可以把与功能相关的data、methods、computed、watch
    全部集成到一个hooks当中进行实现
```