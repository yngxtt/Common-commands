<template>
  <div>
    <el-table
      :data="tableData"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label">
        <template slot-scope="scope">
          <!-- <div v-if="column.format" v-html="column.format(scope.row)"></div> -->
          <cmp v-if="column.format" :html="column.format(scope.row)"></cmp>
          <div v-else>{{ scope.row[column.prop] }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import test from './test.vue'
import Vue from 'vue';
export default {
  components: {
    cmp: {
            props: [
                'html'
            ],
            render() {
                const com = this.html
                return com
            }
        }
  },
  data() {
    this.columns = [
      {
        label: '姓名',
        prop: 'name',
        format: (data) => {
          return (
            <el-button>{data.name}</el-button>
          )
        }
      },{
        label: '年龄',
        prop: 'age'
      },{
        label: '薪资',
        prop: 'money'
      },{
        label: '照片',
        prop: 'imgUrl',
        format: (data) => {
          return (
            <img src={data.imgUrl} style="width: 100px;height: 100px;"></img>
          )
        }
      },
    ]
    return {
      tableData: [
        {
          name: '张三',
          age: '18',
          money: '1800000',
          imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.r5Bbfw1AZAW-hEmYwKOexQAAAA?w=171&h=180&c=7&r=0&o=5&pid=1.7'
        },{
          name: '李四',
          age: '19',
          money: '1900000',
          imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.3DbLGUOE8q7IBMtiESsTYwAAAA?w=182&h=192&c=7&r=0&o=5&pid=1.7'
        },{
          name: '王五',
          age: '20',
          money: '2100000',
          imgUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.KahOuGe_dbUyfn3zsafjLAAAAA?w=204&h=204&c=7&r=0&o=5&pid=1.7'
        },{
          name: '赵六',
          age: '25',
          money: '3000000',
          imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.pwe6d0WIGGDJli8WhKduPAAAAA?w=204&h=204&c=7&r=0&o=5&pid=1.7'
        }
      ]
    }
  }
}
</script>

<style>
.tets {
  width: 100px;
  height: 100px;
}

</style>