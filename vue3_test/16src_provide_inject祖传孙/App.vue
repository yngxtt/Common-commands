<template>
  <div class="app">
    <h1>APP组件  /  {{p}}--{{l}}</h1>
    <Child/>
  </div>
  
</template>

<script>
import Child from './components/Child.vue'
import {reactive,toRefs,provide} from 'vue'
// import {h} from 'vue'
export default {
  nane:"App",
  components: { Child },

  setup() {
    //自定义ref
    let car = reactive({
      p:'迈巴赫',
      l:'5.0T'
    })
    
    provide('car',car)//给后代组件传递数据
   
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style scoped>
.app {
  background-color: #ff6609;
  padding: 20px;
}

</style>
