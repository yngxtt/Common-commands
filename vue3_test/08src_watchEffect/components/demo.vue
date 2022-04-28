<template>
  <h1 @click="a++">点击++ {{a}}</h1>
  <h1 @click="b++">点击 * {{b}}</h1>
</template>

<script>
import {ref,watch,watchEffect} from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
      let a = ref(0)
      let b = ref(2)
      watch(a,(newVal,oldVal)=>{
        console.log(newVal,oldVal)
      })
     watchEffect(()=>{
       const st = b.value;
       console.log('watchEffect',st)
     })
      return {
       a,b
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
