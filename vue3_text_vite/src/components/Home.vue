<template>
  <h1>Home组件</h1>
  <div>
    <div>
      <input type="text" v-model="keyWord"><button @click="getSongs">搜索</button>
      <div v-for="(item,index) in stare.song">
        <img :src="item.artists[0].img1v1Url" :alt="item.name">
        <span>{{item.name}}</span>
        <span>{{item.id}}</span></div>
      
      <button @click="addName">TEST</button>
    </div>
  </div>
</template>

<script  lang="ts" setup>
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
     return new Promise((resolve)=>{
       const resvt = getBeeList(keyWord.value)
       resolve(resvt)
     }).catch((err)=>{
       console.log(err)
     })
      // console.log(Songs.data.result.songs[1].name)
      // Data = Songs.data.result
      // onMounted() {

      // }
      
    }
    // console.log(Songs)
      const getSongs = async () => {
      
            const result = await go()
            stare.song = result.data.result.songs
            console.log( stare.song)
      }

  

</script>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
span {
  font-size: 50px;
}

</style>