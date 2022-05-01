<template>
<h1>hello</h1>
<h1>{{name}}---{{age}}---{{a.b.c}}</h1>
<button @click="name+='+'">name++</button>
<button @click="age++">age++</button>
<button @click="a.b.c++">c++</button>
<hr>
<button @click="show">show</button>


</template>

<script>
import {reactive,toRefs, toRaw,markRaw} from 'vue'
export default {
  name: 'demo',
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
    
  function show() {
    console.log(data)
    const d = toRaw(data)
    console.log(d) 
     const D = markRaw(data)
    console.log(D) 
  }
  
   return {
    ...toRefs(data),
    show
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
