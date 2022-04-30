<template>
<h1>hello</h1>
<h1>{{name}}---{{age}}---{{a.b.c}}</h1>
<button @click="name+='+'">name++</button>
<button @click="age++">age++</button>
<button @click="a.b.c++">c++</button>
<hr>
<h1>---y:{{y}}----z.a{{z.a}}</h1>
<button @click="y++">y++</button>
<button @click="z.a++">z.a++</button>




</template>

<script>
import {reactive,toRefs, readonly,shallowReadonly} from 'vue'
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
    data = readonly(data)
    let x = reactive({
      y:0,
      z:{
        a:0
      }
    })
     x = shallowReadonly(x)
    
   return {
    ...toRefs(data),
    ...toRefs(x)
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
