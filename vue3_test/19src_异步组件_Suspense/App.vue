<template>
  <div class="app">
    <h1>APP组件 </h1>
    <Suspense>
      <template v-slot:default>
          <Child/>
      </template>
      <template v-slot:fallback>
          <h4>加载中...</h4>
      </template>
    </Suspense>
  </div>
  
</template>

<script>
// import Child from './components/Child.vue'
import {defineAsyncComponent} from 'vue'
//异步引入组件
const Child = defineAsyncComponent(() => import('./components/Child.vue'))
export default {
  nane:"App",
  components: { Child },

  setup() {
    return {
         
    }
  }
}
</script>

<style>
.app {
  background-color: #ff6609;
  padding: 20px;
}
h1,h2,h3{
  color: #fff;
}

</style>
