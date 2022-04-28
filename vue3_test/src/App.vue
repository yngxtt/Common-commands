<template>
 <h1>APP</h1>
 <h2>{{data.name}}</h2>
  <h2>{{data.age}}</h2>
  <h2>{{data.job.type}}</h2>
  <h2>{{data.job.le}}</h2>
  <h2>{{data.job.a.b.c}}</h2>
  <button @click="test">test</button>
</template>

<script>
import {reactive} from 'vue'
// import {h} from 'vue'
export default {
 nane:"App",
 setup() {
  //  let name = ref('张三')
  //  let age = ref(18)
  //  let job = reactive({
  //    tyep:'老师',
  //    le:'数学',
  //    a:{
  //      b:{
  //        c:0
  //      }
  //    }
  //  })
  let data = reactive({
    name: '张三',
    age: 18,
    job:{
      tyep:'老师',
      le:'数学',
      a:{
        b:{
          c:0
        }
      }
   }
  })
  
  function test() {
    data.name= '李四'
    data.age ++
    data.job.le = '物理'
    data.job.a.b.c ++
  }

  return {
    data,
    test
  }
  //一个渲染函数
  // return () => {return h('h1','mane')}
 }
}
</script>

<style>

</style>
