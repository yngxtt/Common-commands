<template>
  <div class="cover">
      <h1>BBB</h1>
      <div class="info" v-loading="loading">
        <h1 class="text">{{ text }},{{ addV }}</h1>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            text: null,
            loading: true,
            numVal: 0
            // isShow: false
        }
    },
    computed:{
        addV() {
            return this.numVal
        }
    },
    methods: {
        numm() {
            setInterval(() => {
                this.numVal++
            },1000)
        },
        haha() {
                this.text = `Hello`
                this.numm()
                this.loading = false
        }
    }
}
</script>

<style>
</style>