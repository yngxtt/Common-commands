<template>
 <h1>APP</h1>
 <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.le}}</h2>
  <button @click="test">test</button>
</template>

<script>
import {ref} from 'vue'
// import {h} from 'vue'
export default {
 nane:"App",
 setup() {
   let name = ref('张三')
   let age = ref(18)
   let job = ref({
     tyep:'老师',
     le:'数学'
   })
  
  function test() {
    name.value = '李四'
    age.value =  age.value + age.value
    job.value.le = '物理'
  }

  return {
    age,
    name,
    job,
    test
  }
  //一个渲染函数
  // return () => {return h('h1','mane')}
 }
}
</script>

<style>

</style>
