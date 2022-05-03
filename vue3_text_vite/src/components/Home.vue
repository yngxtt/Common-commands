<template>
  <h1>Home组件</h1>
  <div>
    <div>
      <input type="text" v-model="keyWord"><button @click="go">搜索</button>
      <div v-for="(item,index) in result">{{item.name}}</div>
      <h1>{{stare.name}}</h1><button @click="addName">TEST</button>
      <h2></h2>
    </div>
  </div>
</template>

<script  setup>
import { getBeeList , test} from '../apis/api'
import { ref ,reactive,toRefs , onMounted} from 'vue'
import { useTestStore } from '../store/index'
import {storeToRefs} from 'pinia'
   

    let keyWord = ref('孤勇者')
    let Songs = reactive({})
    
    const Data = reactive({
      name:{
        a:1,
        b:'c'
      }
    })
    const  key =  keyWord.value
    // const Data = JSON.stringify(data)

    const stare = useTestStore()
    // const {name, age} = stare  //结构没有响应式  使用storeToRefs可以解决
    
    const {name, age} = storeToRefs(stare) 
    const addName = () => {
      // 修改state方法
      //1. stare.name = stare.name + '-'
      //2.
      // stare.$patch((state)=>{
      //     stare.name = stare.name + '-'
      // })
      // 3.
      // stare.$patch({name:'hello'})
      // 4.
      // stare.$state = {name:'hello'}
      //5.
      // stare.setTestName('大漂亮')

      // alert(name+','+age)

      stare.setTestName()

    }
    
    

    const go =   () => {
     getBeeList(key).then((req)=>{
       Songs.data = req.data 
       console.log(Songs)
     }).catch((err)=>{
       console.log(err)
     })
      // console.log(Songs.data.result.songs[1].name)
      // Data = Songs.data.result
      // onMounted() {

      // }
      
    }
    // console.log(Songs)
    

  

</script>

<style>

</style>