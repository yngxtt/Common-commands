<template>
  <div>
    <div class="cover">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        :show-header="false"
        :cell-style="rowClass"
        style="width: 100%; margin-top: 20px">
        <el-table-column width="180" style="margin-top: 2px">
          <template slot-scope="scope">
            <div>
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple">{{scope.row.id}}</div>
                  <div class="grid-content bg-purple">{{scope.row.id}}</div>
                </el-col>
                <el-col :span="12"><div class="grid-content-h bg-purple">{{scope.row.id}}</div></el-col>
              </el-row>
            </div>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <p>
              <label style=" padding: 0;">
              {{scope.row.amount1}}
              </label>
              <label style=" padding: 0;">
                {{scope.row.amount1}}
              </label>
            </p>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            {{scope.row.amount2}}
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            {{scope.row.amount3}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-input v-model.trim="value"></el-input>
      <el-input v-model="value"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    };
  },
  methods: {
      // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      //   if (columnIndex === 0) {
      //     if (rowIndex % 2 === 0) {
      //       return {
      //         rowspan: 2,
      //         colspan: 1
      //       };
      //     } else {
      //       return {
      //         rowspan: 0,
      //         colspan: 0
      //       };
      //     }
      //   }
      // }
      rowClass() {
        // return 'background:#E6F1FF;color:#368CFF;font-size:13px'
        return ' border-top: 30px solid #CCC; padding: 0;'
      },
      // headClass() {
      //   return ' color: #2AFCFD ;border-top: 1px solid #1753ac;border-bottom: 1px solid #1753ac; background: rgba(16, 37, 118, 0.5);'
      // }
  }
}
</script>

<style scoped>
    .cover {
      width: 60%;
      margin: 0 auto;
      padding: 0;
    }
    .el-row {
    margin-bottom: 20px;
    background-color: #436656;
    /* &:last-child {
      margin-bottom: 0;
    } */
    }
    .el-col {
        border-radius: 4px;
        background-color: #439856;
    }
    .el-form-item{
    margin-bottom: 20px;
  }
  .el-row {
    margin-bottom: 20px;
  }
   .last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .grid-content-h {
    min-height: 72px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>