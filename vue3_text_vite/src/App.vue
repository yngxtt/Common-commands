<template>
  <div>
    <button @click="goHome">Home</button>
    <button @click="goLogin">Login</button>
    <button @click="goMy">My</button>
  </div>
  <router-view></router-view>
</template>

<script>
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import My from './components/My.vue'
import {useRouter} from 'vue-router'

export default {
  name: 'App',
  components: {
   Home,
   Login,
   My
  },
 
  setup(){
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
    return {
      goLogin,
      goHome,
      goMy
    }
  }
  
}
</script>
<style scoped>
  button {
    margin: 10px;
    border: 0;
    border-radius: 2px;
    background-color: #ff9966;
    color: #fff;
  }
</style>
