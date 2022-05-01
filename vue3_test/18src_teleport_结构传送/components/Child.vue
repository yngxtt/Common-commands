<template>
  <div class="child">
    <h2>Child组件</h2>
     <Son/>
  </div>
 
</template>

<script>
import Son from './Son/Son.vue'
// import {h} from 'vue'
export default {
  nane:"Child",
  components: { Son },

  setup() {
    //自定义ref
    
    
    
   
    return {
      
    }
  }
}
</script>

<style scoped>
.child {
  background-color: #ff9906;
  padding: 20px;
}

</style>
