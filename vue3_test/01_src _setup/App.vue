<template>
 <h1>APP</h1>
 <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="hello">test</button>
</template>

<script>

// import {h} from 'vue'
export default {
 nane:"App",
 setup() {
   let name = '张三'
   let age = 18

  function hello() {
    alert(name+'-'+age)
  }
  return {
    age,
    name,
    hello
  }
  //一个渲染函数
  // return () => {return h('h1','mane')}
 }
}
</script>

<style>

</style>
