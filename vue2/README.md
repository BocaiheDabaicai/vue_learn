# 笔记

### 模板编译
```
    vue.js与vue.runtime.js的区别
        1. vue.js拥有模板解析器和核心功能
        2. vue.runtime.js只拥有核心功能
    
    模板编译的问题
        1. 因为vue.runtime.js没有模板编译器，所以不能使用template直接编译
        2. 引入vue.runtime.js需要使用render方法的回调函数createElement进行编译

    new Vue({
        el:'#app',
        //完整写法
        render(createElement){
            return createElement('标签名','标签值')
        },
        //精简写法
        render:createElement => createElement('标签名','标签值'),
        //脚手架写法
        render:h => h(app)
    })
```

### refs属性
```
    使用refs属性
       1.使用，直接在元素或者子组件的属性上添加 ref="内容"
       2.获取，通过this.$refs.ref名称来获取ref信息
```

### props属性
```
    三种实现方法
        1.简单实现，直接传输数据
            props:['数据名称',...]
        2.一般实现,传输数据，确认类型
            props:{
                '数据名称':'数据类型'
            }
        3.完整实现,传输数据，确认类型，增添限制
            props:{
                '数据名称':{
                    type:'数据类型',
                    required:(true / false) //必要性
                    default:'数据值'   //默认值
                }
            }
    数据传输形式:
        <Student name="小王" sex="男" ...></Student>
```

### mixin混合
```
    局部引入
        1.创建一个.js文件,配置data、方法或者生命周期
        2.为对象命名，同时向外暴露
        3.在对应组件下引入对象
        4.通过minins方法进行使用即可
            例子:
                a.js
                    export const a = {
                        method:{
                            colt(){
                                console.log('你好啊')
                            }
                        }
                    }
                xxx.vue
                    import {a}  from './a.js'
                    mixins:[a]
    全局引入
        1.创建.js文件同上
        2.在App.vue中引入mixin
        3.使用Vue.mixin()方法进行引入即可
            例子:
                app.vue
                    import 引入
                    vue.mixin('对象名称')
                    
    注意点
        1.如果出现data对象同名,优先使用组件的data对象
        2.全局引入,所有组件都将获得这个mixin属性 
```

### plugins
```
    插件
        主要进行全局过滤、全局混入、全局指令、添加实例方法等等,"一处定义，多处使用"
    创建plugins.js
        export default{
            install(Vue){
                <<全局功能>>
            }
        }
    引入plugins.js
        import plugins from './plugins.js'
        app.use(plugins)
```

### scroped | lang
```
    局部生效属性
    用于限定样式的生效范围，防止与其他组件发生冲突
    例子
        <style scroped></style>
    语言选择
    用于选择该组成标签使用的语言
    例子
        <style lang="less"></style>
```

### 表单总结
```
    页面实现步骤:
        1.实现静态页面
        2.实现动态页面
        3.数据存放的位置
            （1.若数据仅在单个文件中使用，则存放在该文件中
            （2.若数据要在多个文件中使用，则存放在根文件中
        4.v-modal不可以绑定props值进行使用
        5.传送数据的理念
            （1.父组件传给子组件，可以是函数、计算属性等待
            （2.子组件传给父组件，需要父组件事先传递函数给子组件
```

### 全局事件总线
```
    实现任意组件间通信
    步骤一:
        创建全局通信元，在main.js中
        new Vue({
            el:'#root',
            render: h => h(App),
            beforeCreated(){
                Vue.prototype.$bus = this
            }
        })
    步骤二:
        绑定事件，在对应.vue文件中
        mounted(){
            this.$bus.$on('事件名',事件)
        }
        事件:
        (1.function(){...}
        (2.methods中的方法名
    步骤三:
        另外的.vue文件使用
        this.$bus.$emit('事件名',传递的数据)
```

### 消息订阅与发布
```
    安装 pubsub
        npm i pubsub-js
    使用方法
        import pubsub from 'pubsub-js'
        
        订阅消息
        mounted(){
            pubsub.subscribe('事件名',事件)
        }
        
        发布消息
        methods:{
            xxx(){
                pubsub.publish('事件名',传递的数据)
            }
        }
```

### nextTick
```
    VC上的回调函数
    更新DOM之后对数据进行操作
    实例:
        add(){
            ...
            this.$nextTick(function(){
                //操作
            })
        }
```

### 动画与过渡效果
```
    动画效果
    实现过程：
        <transation name="动画名" appear 是否直接执行>
            标签
        </transation>
        <style>
            .动画名-enter-active{
                进入时的动画    
            }
            .动画名-leave-active{
                离开时的动画
            }
            配置动画
        </style>
    
    过渡效果
        标签配置同上一样
        <style>
            .动画名-enter-active,.动画名-leave-active{
                动画效果
              }
              .动画名-enter,.动画名-leave-to{
                动画效果
              }
              .动画名-enter-to,.动画名-leave{
                动画效果
              }
        </style>
    
    引入第三方动画库
        安装
            npm install animate.css
        引入
            import 'animate.css'
        使用
            <transition-group 
                name="animate__animated animate__bounce" 
                enter-active-class="animate__swing" 
                leave-active-class="animate__backOutUp" 
                appear>
              <h2 v-show="isShow" class="come" key="1">我是站SHIPAI</h2>
            </transition-group  >
```

### 配置代理
```
    写在vue.config.js中
    方法一
        devServer:{
            proxy:"代理地址"
        }
    方法二
        devServer:{
            proxy:{
                'demo':{
                    target:'代理地址',
                    changeOrigin:true/false   是否与代理地址保持一致
                    pathRewrite:{'^/demo':''} 隐藏代理请求名                  
                }
            }
        }
```

### 插槽
```
    默认插槽
        xxx.vue
            <div>
                <slot>此处内容会在未接收时显示</solt>
            </div>
        a.vue
            <div>
                <xxx>
                    <button>给xxx组件传递按钮</button>
                </xxx>
            </div>
    
    具名插槽
        给指定插槽命名
        xxx.vue
            <div>
                <slot name="big">此处内容会在未接收时显示</solt>
            </div>
        a.vue
            <div>
                <xxx>
                    <button slot="big">给xxx组件传递按钮</button>
                </xxx>
            </div>
    
    作用域插槽
        通过插槽，将数据蹦出
        xxx.vue
            <div>
                <slot :bigData="bigData">此处内容会在未接收时显示</solt>
            </div>
            data(){
                return{
                    bigData:'dasjlk'
                }
            }
        a.vue
            <div>
                <xxx>
                    <template scope="bidData">
                        <button slot="big">{{bigData.bigData}}</button>
                    </template>
                </xxx>
            </div>
```

### Vuex
```
    安装
        npm i vuex@3    vue2.0 Version Use
        npm i vuex@4/vuex   vue3.0 Version  Use
    引入
        src中创建store文件夹以及index.js
        
        ________index.js
        import Vuex from 'vuex'
        import Vue  from 'vue'
        //引入vuex
        Vue.use(Vuex)
        //配置动作捕获、数据操作、数据源
        const action = {
            add(context,value){
                context.commit('ADD',value)
            }
        }
        const mutations = {
            ADD(state,value){
                state.sum += value
            }
        }
        const state = {
            sum:0
        }
        //抛出vuex对象
        export default new Vuex.Store({
            actions,
            mutations,
            state
        })
    使用
        在main.js中引入
        import store from './store'
        new Vue({
          el:'#app',
          render: h => h(App),
          store
        })
        _______________
        在某个.vue组件中
        模板使用
            {{$store.state.sum}}
        js中使用
            在方法里
                this.$store.state.sum   //使用数据
                this.$store.dispatch('add',value)   //传入动作捕获
                this.$store.commit('ADD',value)     //直接执行数据操作
```

### Vuex拓展
```
    补充方法
    在store/index.js 
    const getters = {
        getName(state){
            return state.name+'真真'
        }
    }
    
    便捷语法
    在xxx.vue组件中引入
    import {mapState,mapDispatch,mapMutations,mapGetters} from 'vuex'
    computed:{
        ...mapState({a:'a',b:'b'})      //对象写法
        ...mapState(['a','b'])          //数组写法
        //---------
        ...mapGetters({a:'getters'})    //对象写法
        ...mapGetters({['getters']})    //数组写法    
    },
    methods:{
        ...mapDispatch({a:'a',b:'b'})   //对象写法
        ...mapDispatch(['a','b'])       //数组写法
        //----------
        ...mapMutations({a:'a',b:'b'})  //对象写法
        ...mapMutations(['a','b'])      //对象写法
    使用
        <template>
            <div>
                {{a}}/{{b}}
            </div>
        </template>
    }
    
    模块化vuex
        import countOptions from '@/store/Options/countOptions'
        import personOptions from '@/store/Options/personOptions'
        
        ...
        
        export default new Vuex.Store({
            modules:{
                countOptions,
                personOptions
            }
        })
        personOptions为一个单独的.js文件,写法如下
        export default {
            actions:{},
            mutations:{},
            state:{},
            getters:{}
        }
```

### 路由
```
    安装路由
        npm i vue-router@3                      安装vue2版本
        npm i vue-router@4 / npm i vue-router   安装vue3版本
    路由配置
        创建一个名为router的文件夹
        在该文件夹下,
            创建index.js作为路由器
        引入并配置
            import VueRouter from 'vue-router'
            import Test from '@/components/Test'
            const router = new VueRouter({
                //默认为hash模式,可配置history模式
                //区别:
                //hash模式不美观，可能存在校验问题，但网页兼容性较好
                //history模式美观，需要解决刷新服务器存在的404问题，网页兼容性相比hash模式略差
                mode:'hash'     
                routes:[
                    {
                        //name、path至少存在一个
                        name:'index'    //路由链接名
                        path:'/index'   //路由链接
                        path:'/index/:id/:title'    //路由链接，并配置params参数接收方式  
                        component:Test  //引入组件
                        //可选功能----------------------------------------
                        children:[      //配置子路由
                            {路由配置}
                        ]
                        
                        props:{test1:'aaa',test2:8} //方式一，直接传参
                        props:true      //方式二，使params参数以props形式进行传参
                        //方式三，以函数形式接收$route对象，再获取数据
                        props:function($route){     //完整写法
                            return $route.params.test1
                        }  
                        props({params:{test1}}){    //省略函数开头，解构写法
                            return test1
                        }
                        
                        meta:{isAuth:false,title:首页}    //配置meta参数，主要用于验证识别，能否访问
                        
                        beforeEnter(to,from,next){  //独享路由守卫，只存在前置
                        //  to 接下来要访问的路由 from 之前待过的路由 next 放行通过指令    
                            if(to.meta.isAuth){
                                if(localStorage.getItem('school')==='test'){    localStorage 为本地存储的数据
                                    next()
                                }else{
                                    alert('无法访问')
                                }
                            }else{
                                next()
                            }
                        }
                        -------------------------------------------------
                    }
                ]
            })
            
            //全局前置路由守卫，实现点在之前路由与去到路由中间
            router.beforeEach((to,from,next)=>{
                // 版本一，写出需要验证的路径 
                if(to.path === '/home/news' || to.path==='/home/message') |    to.name==='' 也可以使用
                // 版本二，使用meta上的对象
                if(to.meta.isAuth){
                    if(localStorage.getItem('school')==='niuniu'){
                        next()
                    }else{
                        alert('Error!')
                    }
                }else{
                    next()
                }
            })
            
            //全局后置守卫，实现点在去到路由之后
            router.afterEach((to,from)=>{
                if (to.meta.title){
                    document.title = to.meta.title
                }else {
                    document.title = '路由系统'
                }
            })
            
            //暴露路由对象
            export default router
            
        使用路由配置
            引入路由器、路由对象
            import VueRouter from 'vue-router'
            import router from './router'
            ...
            
            Vue.use(VueRouter)
            ...
            
            new Vue({
                el:'#root',
                router:router,
                render:h=>h(App),
            })
            路由使用方式
                ------简单使用
                //配置路由链接
                <router-link to="/home">
                    <button>Home</button>
                </router-link>
                
                //方式二,to以对象形式接收name参数
                <router-link :to="{name:"home"}">
                    <button>Home</button>
                </router-link>
                
                //配置路由视图，用于接收路由组件，并在此处进行展示
                <router-view></router-view> 
                
                ------传参使用
                //传入query参数
                
                    //方式一，直接传参
                    <router-link :to="`/home/message/detail?id=${item.id}&&title=${item.title}`">
                    {{item.title}}
                    </router-link>
                    
                    //方式二，对象传参，要么接收path属性，要么接收name属性
                    <router-link :to="{
                      // path:'/home/message/detail',
                      name:'detail',
                      query:{id:item.id,title:item.title}
                    }">
                      {{ item.title }}
                    </router-link>
                    
                //传入params参数
                
                    //方式一，直接传参
                    <router-link :to="`/home/message/detailparams/${item.id}/${item.title}`">
                    {{item.title}}
                    </router-link>
                    
                    //方式二，对象传参，不支持path属性
                    <router-link :to="{
                    name:'detailparams',
                    params:{id:item.id,title:item.title}
                    }">
                    {{ item.title }}
                  </router-link>
                
                ------接收props参数
                    在组件中增加
                    props:['id','title']
                
                ------开启replace模式
                    <router-link replace :to="`/home/message/detailparams/${item.id}/${item.title}`">
                    {{item.title}}
                    </router-link>
                    
                ------路由组件生命周期钩子
                    //keep-alive，组件缓存标签，
                    //使路由组件不被销毁，include中放入 组件name 进行激活
                    //被激活的组件可以使用两个生命周期钩子，activated,deactivated
                    
                    <keep-alive include="News">
                      <router-view></router-view>
                    </keep-alive>
                    
                    //在News.vue组件中
                    activated() {
                        console.log('路由组件被激活')
                    }, 
                    deactivated() {
                        console.log('路由组件被失活')
                    }
                    
                    //beforeRouteEnter,beforeRouteLeave
                    //为路由组件生命周期钩子
                    beforeRouteEnter(to,from,next){
                        console.log('在进入Message之前')
                        next()
                    },
                    beforeRouteLeave(to,from,next){
                        console.log('在离开Message之前')
                        next()
                    }
                
                ------$router方法
                    this.$router.forward()  //前进一步路由
                    this.$router.back()     //后退一步路由
                    this.$router.go(n)      //前进或后退 n 步路由，取决于n的正负
                    this.$router.push({     //push方式携带参数去到对应路由组件
                        name:'test',
                        query:{id:item.id,title:item.title}
                    }) 
                    this.$router.replace({  //replace方式携带参数去到对应路由组件
                        name:'test',
                        query:{id:item.id,title:item.title}
                    })
            --------------------------------------            
            解决后端服务刷新页面404的问题
                相关链接地址
                    https://www.npmjs.com/package/connect-history-api-fallback
                导入
                    npm install --save connect-history-api-fallback
                引入
                    var history = require('connect-history-api-fallback');
                在express中使用
                    var express = require('express');
                    var app = express();
                    app.use(history());
```

### 引入外部组件库
```
    根据具体组件库来进行
    分为移动端组件库、PC端组件库
```