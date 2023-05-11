import {reactive,onBeforeUnmount, onMounted} from "vue";

export default function () {
    let point = reactive({
        x:0,
        y:0
    })

    function getPoint(event){
        point.x = event.pageX
        point.y = event.pageY
        console.log('执行获取坐标点')
    }
    onMounted(()=>{
        console.log('----onMounted----')
        window.addEventListener('mousemove',getPoint)
    })
    onBeforeUnmount(()=>{
        console.log('----onBeforeUnmount----')
        window.removeEventListener('mousemove',getPoint)
    })
    return point
}