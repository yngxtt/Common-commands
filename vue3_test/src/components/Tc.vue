<template>
<button @click="show = true">弹窗</button>
  <teleport to="body">
   <div class="mask" v-if="show">
        <div class="ts" >
        <h2>这是一个弹窗</h2>
        <h4>模板内容</h4>
        <h4>模板内容</h4>
        <h4>模板内容</h4>
        <button @click="show = false">关闭弹窗</button>
    </div>
   </div>
  </teleport>
</template>

<script>
import {ref} from 'vue'
export default {
  nane:"Ts",
  components: {  },

  setup() {
    
    let show = ref(false)
   
    return {
        show
    }
  }
}
</script>

<style scoped>
.mask {
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
}
.ts {
  width: 300px;
  height: 200px;
  border-radius: 5px;
  background-color: #ccc;
  padding: 20px;
  padding-bottom: 40px;
  position: absolute;
  top:50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -150px;
}

</style>
