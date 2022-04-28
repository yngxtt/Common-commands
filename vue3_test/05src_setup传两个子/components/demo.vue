<template>
  <h1>{{msg}}</h1>
  <slot name="a"></slot><br>
  <button @click="test">hello</button><br>
  <slot name="b"></slot>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits:['hello'],
  setup(props,context){
      
      function test() {
        console.log(props.msg,context)
        context.emit('hello',666)
      }
      return {
        test
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
