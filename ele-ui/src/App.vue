<template>
  <div id="app">
  <!-- <Home/> -->
  <!-- <login/> -->
  <!-- <t-test/> -->
  <!-- <mine></mine> -->
  <!-- <Table></Table> -->
  <test/>
  </div>
</template>

<script>
// import login from './components/login.vue'
// import Home from './components/Home.vue'
// import mine from './components/mine.vue'
import test from './components/test'
import Table from './components/el-table'
// import tTest from './components/test'

export default {
  name: 'App',
  
  components: {
    //  Home,
    //  login
    // tTest
    // mine,
    Table,
    test
  }
}
</script>

<style>
body {
  background-color: #ccc;
}
 .cover {
    width: 1800px;
    height: 800px;
    margin-bottom: 20px auto;
    background-color: rgb(223, 111, 37);
    border: seagreen solid 5px;
    border-radius: 60px;
    text-align: center;
  }
  .text {
    line-height: 600px;
    font-size: 120px;
  }
</style>
