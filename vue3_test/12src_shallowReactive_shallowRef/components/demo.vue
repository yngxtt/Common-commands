<template>
<h1>hello</h1>
<h1>{{data.name}}---{{data.age}}---{{data.a.b.c}}</h1>
<button @click="data.age++">age++</button>
<button @click="data.a.b.c++">c++</button>
<hr>
<h2>{{x.y}}</h2>
<button @click="x.y++">X++</button>



</template>

<script>
import { toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'demo',
  setup(){
    let data = shallowReactive({
      name:'zhangsan',
      age:18,
      a:{
        b:{
          c:0
        }
      }
    })
    let x = shallowRef({y:0})
    
  
   const c = toRefs(data)
   return {
    // name:toRef(data,'name'),
    // age:ref(data.age),//不是响应式
    
    // c:toRef(data.a.b,'c'),
    data,
    x
   
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
