<template>
  <div class="test">
    <el-input v-model="form.value" @change="test(val)"></el-input>
    <h1>{{ test(form.value) }}</h1><el-button @click="removeTrim(form)">计算</el-button>/ <el-button @click="test">test</el-button>
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
           str: '  1243   '
        }
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
        async test() {
            const testData = {
                a: '    111111111      ',
                b: {
                    b1: '   222222        ',
                    b2: '        3333333333',
                    b3: {
                        a: '111   ',
                        b: '      222',
                        c: {
                            c1: '     haha'
                        }
                    }
                },
                c: [{ CC1: '   AA  '   , cc2: '     111'}, '    aaa    ',  'aaaa   '],
                d: ['   aa   ', '     bbb', 'ccc   ']
            }
            await this['trimTest'](testData)
            //  console.log(await this['trimTest'](this._data))
            // console.log(this._data)
             console.log(testData)
             const Arr = ''
             console.log(typeof Arr)
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