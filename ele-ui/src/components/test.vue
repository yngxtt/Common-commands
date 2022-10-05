<template>
  <div class="test">
    <div>
        <el-button @click="test">test</el-button>
    </div>
    <div v-if="colmns.length > 0">
        <el-table>
            <el-table-column v-for="item in colmns" :key="item.pops" :label="item.key">

            </el-table-column>
        </el-table>
    </div>
    <div v-else>NO DATA!</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           testData: [
             {
                key: '姓名',
                pops: 'userName'
             },
             {
                key: '年龄',
                pops: 'age'
             },
             {
                key: '薪水',
                pops: 'money',
                isM: true
             }
           ],
           colmns: [],
           tableData: [
            {
                userName: '张三',
                age: 18,
                money: 1200000
            },
            {
                userName: '李四',
                age: 20,
                money: 2000000
            },
            {
                userName: '王五',
                age: 22,
                money: 1500000
            }
           ]
        }
    },
    mounted() {
       
    },
    methods: {
        test () {
            const data = []
            for (let i = 0; i < this.testData.length; i ++ ) {
                let item = {}
                item.key = this.testData[i].key
                item.pops = this.testData[i].pops
                item.windht = this.testData[i].key.length * 10
                if (this.testData[i].isM) {
                    item.fn = (data) => {
                        return (
                            <span>{ data / 100 }</span>
                        )
                    }
                }
                data.push(item)
            }
            this.colmns = data
            console.log(this.colmns)

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