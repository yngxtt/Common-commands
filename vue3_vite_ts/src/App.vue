<template>
  <div class="app">
    <button @click="goHome">Home</button>
    <button @click="goLogin">Login</button>
    <button @click="goMy">Mine</button>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import {useRouter} from 'vue-router'

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



