<template>
  <h1>Login组件</h1>
</template>

<script setup lang = "ts">
import { ref, onMounted } from 'vue'
const hello = ref('Hello world!')
const  Hello =  () => {
  alert(hello)
}
onMounted (()=>{
  Hello()
})
</script>
<style>

</style>