<template>
  <div class="users-list">
    <el-card class="box-card">
      <el-row gutter="30">
        <el-col span="7">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col span="4">
          <el-button type="primary">点击添加</el-button>
        </el-col>
      </el-row>
      <!--用户区域-->
      <el-row>
        <el-col>
          <el-table :data="tableData" border>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="状态">
              <!--用自定义插槽进行状态的显示-->
              <template slot-scope="scope">
                <el-switch
                        v-model="scope.row.value"
                        active-color="#13ce66"
                        inactive-color="#ff4949" @change="getchange(scope.row)">
                </el-switch>
              </template>
            </el-table-column>
            <!--用自定义插槽进行操作-->
            <el-table-column label="操作" width="180px">
              <template slot-scope="">
                <el-tooltip effect="dark" content="编辑" placement="top" :enterable="false">
                  <el-button type="primary" icon="el-icon-edit" circle></el-button>
                </el-tooltip>
                <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
                  <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-tooltip>
                <el-tooltip effect="dark" content="操作" placement="top" :enterable="false">
                  <el-button type="warning" icon="el-icon-s-tools" circle></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--分页的实现-->
      <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Users",
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          value:true,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          value:true,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          value:false,
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          value:true,
        }]
      };
    },
    methods:{
      getchange(userInfo){
        console.log(userInfo);
      }
    },
  }
</script>

<style lang="scss" scoped>
  $mag-top : 25px;
  .users-list{
    margin-top: 15px;
  }
  .el-card{
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  .el-table{
    margin-top: 15px;
  }
  .el-pagination{
    margin-top: $mag-top;
    text-align: center;
  }
</style>
