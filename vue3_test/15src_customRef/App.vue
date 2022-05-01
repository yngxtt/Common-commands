<template>
  <h1>@</h1>
 
  <input type="text" v-model="m" >
  <h1>{{m}}</h1>
</template>

<script>
import demo from './components/demo.vue'
import {ref,customRef} from 'vue'
// import {h} from 'vue'
export default {
  nane:"App",
  components: { demo },

  setup() {
    //自定义ref
    let timer  
    function myRef(value,time) {
      return customRef((track,trigger)=>{
        return {
          get(){
            track()//追踪数据
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout( ()=> {
            value = newValue
            trigger()//重新解析模板
           },time)
          }
        }
      })
    }
    
    let m = myRef('good',1002)

    return {
      m
    }
  }
}
</script>

<style>

</style>
