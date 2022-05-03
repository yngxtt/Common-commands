<template>
  <h1>Home组件</h1>
  <div>
    <div>
      <input type="text" v-model="keyWord"><button @click="go">搜索</button>
      <div v-for="(item,index) in result">{{item.name}}</div>
      <h1 v-if="result">{{result.songs[1].name}}</h1>
    </div>
  </div>
</template>

<script >
import { getBeeList , test} from '../apis/api'
import { ref ,reactive,toRefs , onMounted} from 'vue'
export default {
  setup(){
    let keyWord = ref('孤勇者')
    let Songs = {}
    
    const Data = reactive([])
    const  key =  keyWord.value
    // const Data = JSON.stringify(data)

    const go =   () => {
      // return  new Promise((resolve,reject) => {
      //   getBeeList(key).
      //   then((res)=>{
      //    res.data.result.songs
      //       resolve(res)
      //   }).catch((err)=>{
      //     reject(err)	
      //     console.log('no')
      //   })
      // })
     getBeeList(key).then((req)=>{
       Songs = reactive(req.data) 
       console.log(Songs)
     }).catch((err)=>{
       console.log(err)
     })
      // console.log(Songs.data.result.songs[1].name)
      // Data = Songs.data.result
      // onMounted() {

      // }
      
    }
    console.log(Songs)
    return {
      keyWord,
      ...toRefs(Songs),
      
      go
    }

  }
}
</script>

<style>

</style>