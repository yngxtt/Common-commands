<template>
    <div class="cover">
    <div class="search">
      <van-search v-model="keyWord" background="#ec4141" placeholder="请输入搜索关键词" />
      <van-button round @click="getSongs"  type="default" size="normal">搜索</van-button>
    </div>
      <div v-for="(item,index) in stare.song" @click="getSongUrl(item.id)" class="item">
          <div>
            <img :src="item.artists[0].img1v1Url" :alt="item.name">
            <span>{{item.name}}</span>
          </div>
          <span>{{item.id}}</span>
      </div>
      <button @click="addName">TEST</button>
    </div>
  
    <iframe class="play" frameborder="no" border="0" marginwidth="10" marginheight="0" width=100% height=86 :src="stare.songUrl"></iframe>
</template>

<script  lang="ts" setup>
import { getBeeList , songIdSearch } from '../apis/api'
import { ref ,reactive, toRefs, onMounted } from 'vue'
import { useTestStore } from '../store/index'
import {storeToRefs} from 'pinia'


    let keyWord = ref('孤勇者')
    let songUrl = ref('')
    
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

      const getSongUrl = async (id) => {
        const result = await songIdSearch(id)
        stare.songByUrlData = result.data
        stare.songUrl =  stare.songByUrlData.data[0].url
        console.log( stare.songByUrlData.data[0].url )
    }
    

  

</script>

<style>
img {
  width: 30px;
  height: 30px;
  border-radius: 25px;
}



.search {
  height: 100px;
  width: 132%;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: #ec4141;

}
.play {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: aqua;
}
.cover {
  margin: 0 auto;
  width: 50vh;
  height: 100%;
  display: block;
}
.item {
  width: 600px;
  display: flex;
  justify-content: space-between;
  height: 30px;
  background-color: #666;
  margin: 10px 0;
   line-height: 30px;
}

</style>