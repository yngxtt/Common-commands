<template>
  <div class="cover-index">
      <el-button @click="test">显示</el-button>
      <aa ref="a1"></aa>
      <ab ref="a2"></ab>
      <ac ref="a3"></ac>
      <ad ref="a4"></ad>
      <ae ref="a5"></ae>
      <af ref="a6"></af>
      <ag ref="a7"></ag>
      <br><br><br><br><br>
  </div>
</template>

<script>
import aa from './components/a.vue'
import ab from './components/b.vue'
import ac from './components/c.vue'
import ad from './components/d.vue'
import ae from './components/e.vue'
import af from './components/f.vue'
import ag from './components/g.vue'
export default {
    components: {
        aa,
        ab,
        ac,
        ad,
        ae,
        af,
        ag
    },
    data() {
        return {
            isShows: [false, false, false, false, false, false, false],
            winHeight: 0,
            myRef: [],
            myname: 'a1',
        }
    },
    computed: {
        isShow0() {
            return this.isShows[0]
        },
        isShow1() {
            return this.isShows[1]
        },
        isShow2() {
            return this.isShows[2]
        },
        isShow3() {
            return this.isShows[3]
        },
        isShow4() {
            return this.isShows[4]
        },
        isShow5() {
            return this.isShows[5]
        },
        isShow6() {
            return this.isShows[6]
        },
        isShow7() {
            return this.isShow[7]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
        this.addRef()
    },
    methods: {
        handleScroll(e) {
            this.winHeight =  e.target.scrollTop || document.documentElement.scrollTop
            // console.log(this.winHeight)
            this.myRef.forEach((item, index) => {
                // console.log(item.$el.offsetTop)
                // console.log(typeof item.$el.offsetTop)
                console.log(item.$el.offsetTop)
                if((item.$el.offsetTop < this.winHeight) && item.isShow === false) {
                     this.isShows[index] = true
                    // console.log(item.isShow)
                    // item.isShow === true
                    // console.log(item.isShow)
                    // item.$refs.$el.isShow = true
                    let i = 1
                    i++
                    item.haha()
                  console.log(i)
                }
            })
        },
        addRef() {
            this.myRef = []
            this.myRef.push(this.$refs.a1)
            this.myRef.push(this.$refs.a2)
            this.myRef.push(this.$refs.a3)
            this.myRef.push(this.$refs.a4)
            this.myRef.push(this.$refs.a5)
            this.myRef.push(this.$refs.a6)
            this.myRef.push(this.$refs.a7)
        },
        test() {
            // console.log(this.$refs.a1.name)
            const a = '123'
            const b = '123'
            console.log(a === b)
        }
    }
}
</script>

<style>
.cover-index {
    margin: 0 auto;
}
</style>