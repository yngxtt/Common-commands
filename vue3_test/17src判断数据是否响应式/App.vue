<template>
  <div class="app">
    <h1>APP组件  </h1>
  
  </div>
  
</template>

<script>
import {reactive,ref,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
// import {h} from 'vue'
export default {
  nane:"App",
  components: {  },

  setup() {
    //自定义ref
    let a = reactive({
      p:'迈巴赫',
      l:'5.0T'
    })
    let b = ref(0)
    let a2 = readonly(a)

    console.log('isRef-b:'+isRef(b))
    console.log('isReactive-a:'+isReactive(a))
    console.log('isReadonly-a2:'+isReadonly(a2))
    console.log('isProxy-a:'+isProxy(a))
    console.log('isProxy-b:'+isProxy(b))
   
    return {
    
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
