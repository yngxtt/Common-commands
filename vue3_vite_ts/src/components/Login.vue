<template>
  <h1>Login组件</h1>
  <button @click="Hello">test</button>
</template>

<script setup lang = "ts">
import { ref, onMounted } from 'vue'
const hello = ref('Hello world!')

  const OLD = [
    {
      a: 0,
      b:[
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0}
      ]
    },
    {
      a: 0,
      b:[
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0}
      ]
    },
    {
      a: 0,
      b:[
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0}
      ]
    },
    {
      a: 0,
      b:[
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0}
      ]
    }
  ]

const NEW = [
    {
      a: 1,
      b:[
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 0}
      ]
    },
    {
      a: 0,
      b:[
        {c: 0},
        {c: 1},
        {c: 0},
        {c: 1},
        {c: 0}
      ]
    },
    {
      a: 0,
      b:[
        {c: 1},
        {c: 0},
        {c: 0},
        {c: 0},
        {c: 1}
      ]
    },
    {
      a: 1,
      b:[
        {c: 1},
        {c: 0},
        {c: 1},
        {c: 0},
        {c: 1}
      ]
    }
  ]
  const Hello =  () => {
    for (let i = 0; i < NEW.length; i ++) {
      if(NEW[i].a === 1) {
          OLD[i].a = 1
      }
      for(let j = 0; j < NEW[i].b.length; j ++) {
        if(NEW[i].b[j].c === 1) {
          OLD[i].b[j].c = 1
        }
      }
    }
    console.log(OLD) 
    return NEW
  }
onMounted (()=>{ 
})
</script>
<style>

</style>