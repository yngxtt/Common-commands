<template>
<h1>{{name}}---{{age}}---{{c}}</h1>
<button @click="c++">test</button>
</template>

<script>
import { toRef,toRefs,reactive,ref } from '@vue/reactivity'
export default {
  name: 'helloworld',
  setup(){
    let data = reactive({
      name:'zhangsan',
      age:18,
      a:{
        b:{
          c:0
        }
      }
    })
  
   const c = toRefs(data)
   return {
    name:toRef(data,'name'),
    age:ref(data.age),//不是响应式
    
    c:toRef(data.a.b,'c'),
  
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
