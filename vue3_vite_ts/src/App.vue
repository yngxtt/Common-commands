<template>
  <div class="app">
    <button @click="goHome">Home</button>
    <button @click="goLogin">Login</button>
    <button @click="goMy">Mine</button>
    <button @click="fn(urls, max)">计算</button>
    <button @click="lookLook">LookLook</button>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {routeLocationKey, useRouter} from 'vue-router'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
 let flag:boolean = false


    

    const router = useRouter()
    function goHome () {
      router.push({path:'/home'})
    }
    function goLogin() {
       router.push({path:'/login'})
    }
    function goMy() {
       router.push({path:'/my'})
    }


  const urls = [3, 4, 6, 5, 1, 10, 2, 9, 7, 8]
  const max = 3
  const fn = (urlArr:number[], reqMax:number) => {
    return new Promise((resolve) => {
      if (urlArr.length === 0) {
        resolve([])
        return
      }
      const results:any = []
      let index = 0
      let curr = 0
     async function req() {
        curr ++
        const url = urlArr[index]
        const i = index
        index ++
        try {
          const D = await function add () {
            setTimeout(() => {
              return (url * 1000)
            }, url * 1000)
          }
          results[i] = D
        } catch (err) {
          results[i] = err
        } finally {
          console.log(results)
          if (curr === results.length) {
            console.log('results')
            console.log(results)
            resolve(results)
          }
          if(curr <= urlArr.length) {
            req()
          }
        }
      }
      const Max = reqMax < urlArr.length ? reqMax : urlArr.length
      for (let i = 0; i < Max; i ++) {
        req()
      }
    })
  }

  const lookLook = () => {
    const data = fn(urls, max)
    console.log(data)
  }

</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
  button {
    margin: 10px;
    border: 0;
    border-radius: 2px;
    background-color: #ff9966;
    color: #fff;
  }
</style>



