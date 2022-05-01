<template>
  <div class="son">
    <h1>Son组件--/  {{p}}--{{l}}</h1>
  </div>
</template>

<script>
import { inject,toRefs} from 'vue'
export default {
  nane:"Son",
  components: {  },

  setup() {
    let car =  inject('car')
    
   
    return {
    //   ...(car)
    ...toRefs(car)
    }
  }
}
</script>

<style scoped>
.son {
  background-color: #190ac5;
  padding: 20px;
}

</style>
