<template>
  <div class="cover-mine">
    <div ref="tag" class="uu" :style="[isTtransition ? 'transition:all 0' : '']" :class="[is ? 'up' : 'ub', isTtransition ? 'transition' : '']">
        <button @click="changeH">上下</button>
    </div>
    <div class="dong" @mousedown="touchmove" ></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            is: false,
            isTtransition: true,
            X: 0,
            Y: 0
        }
    },
    mounted() {
        const h =  localStorage.getItem('boxH') || 120
        this.$refs.tag.style.height =  h + 'px'
    },
    methods: {
        touchmove() {
            this.isTtransition = false
        //    this.X = event.clientX;
		//     this.Y = event.clientY;
        //     console.log(this.X, this.Y)
        document.onmousemove = (e) => {
            console.log(e.pageY)
            console.log(this.$refs)
            this.$refs.tag.style.height = (e.pageY - this.$refs.tag.offsetTop) + 'px'
        }
        document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
            this.isTtransition = true
            localStorage.setItem('boxH', this.$refs.tag.offsetHeight)
        };
      
        },
        changeH () {
            this.is = !this.is
            if (this.is) {
               this.$refs.tag.style.height = 100 + 'px'
            } else {
               this.$refs.tag.style.height = 500 + 'px'
            }
             localStorage.setItem('boxH', this.$refs.tag.offsetHeight)
        }  
    }
}
</script>

<style scoped>
 transition
    .cover-mine {
        width: 100%;
        height: 90vh;
        background-color: #ccc;
        /* transform: all 500ms; */
    }
    .transition {
        transition: all 0.8s;
    }
    .uu {
        width: 1000px;
        margin: 0 auto;
        background-color: #ff0000;
    }
    .up {
        height: 100px;
    }
    .ub {
        height: 500px;
    }
    .dong {
        width: 1000px;
        margin: 0 auto;
        height: 3px;
        margin-top: -1px;
        cursor: row-resize;
    }
    .dong:hover {
        background-color: #000;
    }
</style>