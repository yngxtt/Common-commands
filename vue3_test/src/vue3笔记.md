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