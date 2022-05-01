<template>
  <div class="son">
    <h3>Son组件</h3>
    <Ts/>
  </div>
</template>

<script>
import Ts from '../../components/Tc.vue'
export default {
  nane:"Son",
  components: { 
    Ts
   },

  setup() {
    
   
    return {
   
    }
  }
}
</script>

<style scoped>
.son {
  background-color: #190ac5;
  padding: 50px;
}

</style>
