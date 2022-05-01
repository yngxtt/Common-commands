<template>
  <h1>My组件</h1>
</template>

<script>
import { reactive } from 'vue'
 import { useRouter,
 onBeforeRouteUpdate,
 onBeforeRouteLeave } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const rt = reactive(router)
        // watch(router,(newValue,oldValue)=>{
        //     console.log(oldValue + 'oldValue')
        // })
        // console.log(router)
        //  onBeforeRouteUpdate((to,from,next) => {
        //     console.log(to)
        // })
        //  onBeforeRouteLeave((to,from,next) => {
        //     console.log(to)
        // })
    },
    beforeRouteEnter(to,from,next) {
            // console.log(to)
            next()
            console.log(from)
            if(from.path === '/login') {
                // alert('来自login')
                console.log('lg')
                // next()
            }
    },
    // beforeRouteLeave(to,from,next)  {
    //         console.log(to)
    // },
    // beforeRouteUpdate(to,from,next) {
    //         console.log('onBeforeRouteUpdate')
    // }
}
</script>

<style>

</style>