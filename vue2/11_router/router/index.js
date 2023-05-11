import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import News from "@/components/News";
import Message from "@/components/Message";
import Detail from "@/components/Detail";

const router = new VueRouter({
    routes: [
        {
            path: '/Home',
            component: () => import("@/components/Home"),
            meta:{isAuth:true,title:'Family'},
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            props:function({query:{id,title}}){
                                return {id,title}
                            }
                        },
                        {
                            //接收params参数，且to的对象写法不支持path
                            name: 'detailparams',
                            path: 'detailParams/:id/:title',
                            component: Detail,
                            //使用props的第一种方法
                            // props:{test1:123,test2:'abcd'}
                            //使用props的第二种方法，使得params参数以props的参数形式传入组件
                            // props:true
                            //使用props的第三种方法，接收$route对象，此处使用连续解构获取值
                            props({params: {id, title}}) {
                                return {id, title}
                            }
                        }
                    ],
                    meta:{isAuth:true},
                    // beforeEnter(to,from,next){
                    //     if (to.meta.isAuth){
                    //         if (localStorage.getItem('school')==='niuniu'){
                    //             next()
                    //         }else{
                    //             alert('您无权限访问')
                    //         }
                    //     }
                    //     //    独享路由守卫只存在前置守卫
                    // },
                }
            ]
        },
        {
            name: 'about',   //通过命名，可以直接连接对应的组件
            path: '/About',
            component: About,
            meta:{isAuth:false,title:'About'}
        }
    ]
})

//启用全局前置守卫
// router.beforeEach((to,from,next)=>{
//     console.log('beforeEach',to,from)
//     // 版本一，写出需要验证的路径 if(to.path === '/home/news' || to.path==='/home/message') |    to.name==='' 也可以使用
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school')==='niuniu'){
//             next()
//         }else{
//             alert('Error!')
//         }
//     }else{
//         next()
//     }
// })
//启用全局后置守卫，进入到达的路由组件之后触发
// router.afterEach((to,from)=>{
//     console.log('afterEach',to,from)
//     console.log(typeof to.meta.title,to.meta.title)
//     if (to.meta.title){
//         document.title = to.meta.title
//     }else {
//         document.title = '路由系统'
//     }
// })

export default router