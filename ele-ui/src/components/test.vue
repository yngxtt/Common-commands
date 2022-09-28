<template>
  <div class="test">
    <div>
        <el-radio-group v-model="radio" ref="test">
            <el-radio :label="1">备选项1</el-radio>
            <el-radio :label="2">备选项2</el-radio>
            <el-radio :label="3">备选项3</el-radio>
        </el-radio-group>
        <el-button @click="test">tab</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           form: {
             value: ''
           },
           testData: {
                a: '112 23  ',
                b: 'Ab       ',
                c: {
                    c1: ' 11   ',
                    c2: '222    '
                },
                d: ['   11  ', ' 3333  ', '  43534535 ']
           },
           str: '  1243   ',
           radio: 1
        }
    },
    mounted() {
        this.radio = 2
        console.log(this.$refs.test)
    },
    methods: {
        removeTrim(obj) {
            for(const key in obj) {
                if(typeof  obj[key] === 'string') {
                    obj[key] = obj[key].trim().trimEnd()
                }
            }
            console.log(obj)
            return obj
        },
        trimTest(val) {
            // // console.log(this[val])
            // if(typeof val === 'string') {
            //    this._data[val] = val.trim().trimEnd()
            //    val =  this[val]
            // } else {
                // if ( typeof val === 'string' ) {
                //     this._data[val] = val.trim().trimEnd()
                //     console.log(this)
                //     return
                // }
                for(const key in val) {
                    if(typeof  val[key] === 'string') {
                        val[key] = val[key].trim().trimEnd()
                    } else if (typeof val[key] === 'object') {
                        this.trimTest(val[key])
                    }
                }
            // }
            return val
        },
        test() {
            this.radio < 3 ? this.radio++ : this.radio = 1
        }
    }
}
</script>

<style>
    .test {
        width: 900px;
        margin: 0 auto;
    }
</style>