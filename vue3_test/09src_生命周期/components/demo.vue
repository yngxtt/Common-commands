<template>
  <h1>HelloWorld</h1>
</template>

<script>
import {onBeforeMount,onMounted,onBeforeUnmount,onUpdated,onBeforeUpdate,onUnmounted} from 'vue'
export default {
  name: 'helloworld',
  setup(){
    console.log('setup')
    const test = () => {}
    onBeforeMount(()=>{console.log('onBeforeMount')})
    onMounted(()=>{console.log('onMounted')})
    onBeforeUnmount(()=>{console.log('onBeforeUnmount')})
    onUpdated(()=>{console.log('onUpdated')})
    onBeforeUpdate(()=>{console.log('onBeforeUpdate')})
    onUnmounted(
      ()=>{console.log('onUnmounted')},
      test()
    )
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
