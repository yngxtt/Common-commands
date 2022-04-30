<template>
  <h1>@</h1>
  <demo></demo>
  <button @click="show = !show">show</button>
</template>

<script>
import demo from './components/demo.vue'
import {ref} from 'vue'
// import {h} from 'vue'
export default {
  nane:"App",
  components: { demo },

  setup() {
    let show = ref(true)
    return {
      show
    }
  }
}
</script>

<style>

</style>
