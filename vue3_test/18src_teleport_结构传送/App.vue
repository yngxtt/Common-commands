<template>
  <div class="app">
    <h1>APP组件 </h1>
    <Child/>
  </div>
  
</template>

<script>
import Child from './components/Child.vue'
export default {
  nane:"App",
  components: { Child },

  setup() {
    return {
         
    }
  }
}
</script>

<style>
.app {
  background-color: #ff6609;
  padding: 20px;
}
h1,h2,h3{
  color: #fff;
}

</style>
