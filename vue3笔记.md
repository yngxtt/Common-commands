## vue3 中 watch 监控当前 router
```js
    import { reactive, toRefs, watch, ref } from 'vue';
    import { useRouter } from 'vue-router';
	export default {
        setup () {
            /**
            * 使用watch监控当前 router 的变化
            */
            const useRouterCurrent = reactive(useRouter());
		    watch(useRouterCurrent, o => {
      			state.selectedKeys.splice(0, 1, o.currentRoute.name);
		    });
            return {
                useRouterCurrent
            }
        }
    }
```
### onBeforeRouteUpdate路由守卫
```js
    import { useRouter,onBeforeRouteUpdate } from 'vue-router';

    let router = useRouter()
    beforeRouteEnter (to, from, next) { // 首次进入此路由会触发该钩子函数
    next( => {
       
    })
    },
    beforeRouteUpdate (to, from, next) { // fileId发生改变时触发此钩子函数
        if (!sessionStorage.getItem('scan_' + to.params.fileId)) {
            sessionStorage.setItem('scan_' + to.params.fileId, JSON.stringify(to.params))
        }
        this.details = JSON.parse(sessionStorage.getItem('scan_' + to.params.fileId))
    next()
    },
```

```js
    watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
        console.log('watch',newValue);
    },{ immediate: true })
```

```js

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


```