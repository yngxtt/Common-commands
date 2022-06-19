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
            b: 'Ab       '
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
            await this['trimTest'](this.str)
            console.log(this.str)
        },
        trimTest(val) {
            console.log(this[val])
            if(typeof val === 'string') {
               this[val] = val.trim().trimEnd()
               val =  this[val]
            } else {
                for(const key in val) {
                    if(typeof  val[key] === 'string') {
                        val[key] = val[key].trim().trimEnd()
                    }
                }
            }
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