<template>
  <div>
  <div class="table-wel">
    <div style="width: 49%; margin-right: 4px;">
      <el-table
              :data="tableData"
              border
              style="width: 100%">
        <el-table-column
                prop="date"
                label="系统">
        </el-table-column>
        <el-table-column
                prop="name"
                label="版本">
        </el-table-column>
      </el-table>
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>

      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>

      </el-collapse>
    </div>
    <div  style="width: 59%">
      <el-calendar v-model="value">
      </el-calendar>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Welcome",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        value: new Date(),
        activeNames: ['1'],
      }
    },
    methods: {
      goBack() {
        //console.log('go back');
      },
      handleChange() {
        //console.log(val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-wel{
    display: flex;
    margin-top: 15px;
    > .el-breadcrumb {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 20px;
    }
    .el-collapse-item{
      margin-top: 10px;
    }
    .el-card{
      margin-top: 13px;
    }
    > .cell{
      text-align: center;
    }
   }

</style>
