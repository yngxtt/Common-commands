import {onMounted,onBeforeUnmount,reactive} from 'vue'
export default function(){
    let por = reactive({
        x:0,
        y:0
    })
    function xy(event){
        por.x = event.pageX
        por.y = event.pageY
        console.log(event.pageX)
    }
    onMounted(()=>{
    window.addEventListener('click',xy)
    })
    onBeforeUnmount(()=> {
    window.removeEventListener('click',xy)
    })

    return por
}