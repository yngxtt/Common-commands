<template>
  姓：<input type="text" v-model="data.name" >
  名：<input type="text" v-model="data.lastName" >
  <h1>{{fullName}}</h1>
  <input v-model="data.fullName">
</template>

<script>
import {reactive ,computed} from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
      let  data = reactive({
        name: '张',
        lastName: '三'
      })
      let fullName = computed(()=>{
        return data.name + data.lastName 
      })
      //计算属性完整写法
      data.fullName = computed({
        get() {
           return data.name +'-'+ data.lastName
        },
        set(value) {
          const nameArr = value.split('-')
          data.name = nameArr[0]
          data.lastName = nameArr[1]
        }

       
      })
      return {
        data,
        fullName
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
