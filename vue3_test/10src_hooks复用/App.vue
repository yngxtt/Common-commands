<template>
  <demo  v-if="show"></demo>
  <button @click="show = !show">show</button>
</template>

<script>
import demo from './components/demo.vue'
import {ref} from 'vue'
export default {
  nane:"App",
  components: { demo },

  setup() {
    let show = ref(true)
    return {
      show
    }
    //hello
  }
}
</script>

<style>

</style>
