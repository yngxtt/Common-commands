<template>
  <h1>X:{{hooks.x}}--Y:{{hooks.y}}</h1>
</template>

<script>
import user from '../hooks/user'
export default {
  name: 'helloworld',
  setup(){
   let hooks = user()
   console.log(hooks)
   return {
     hooks
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
