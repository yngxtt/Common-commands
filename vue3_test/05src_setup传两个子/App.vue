<template>
  <demo @hello="hello" msg="msg">
    <template v-slot:a>
      <span>【你好！】</span>
    </template>
    <template v-slot:b>
      <span>【你好！】</span>
    </template>
  </demo>
</template>

<script>
import demo from './components/demo.vue'
// import {reactive} from 'vue'
// import {h} from 'vue'
export default {
  nane:"App",
  components: { demo },

  setup() {
  
    function hello(a) {
      alert(`'hello'+${a}`)
    }
    return {
      hello
    }
    
  }
}
</script>

<style>

</style>
