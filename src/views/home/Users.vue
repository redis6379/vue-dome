<template>
  <div class="users-list">
    <!--卡片区域-->
    <el-card class="box-card">

      <!--输入搜索区域-->
      <el-row :gutter="30">
        <el-col :span="7">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">点击添加</el-button>
        </el-col>
      </el-row>

      <!--用户区域-->
      <el-row>
        <el-col>
          <el-table :data="usersLists" border>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="username" label="名字"></el-table-column>
            <el-table-column prop="user_ip" label="地址"></el-table-column>
            <el-table-column prop="user_email" label="邮箱"></el-table-column>
            <el-table-column label="状态">
              <!--自定义状态-->
              <template slot-scope="scope">
                <el-switch
                        v-model="scope.row.value"
                        active-color="#13ce66"
                        inactive-color="#ff4949" @change="getchange(scope.row)">
                </el-switch>
              </template>
            </el-table-column>

            <!--自定义操作-->
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

      <!--分页的区域-->
      <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageInfo.pagenum"
              :page-sizes="[10,20,30,40,50]"
              :page-size="pageInfo.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import { getUsersInfo,updateStsuts } from "../../network/user";

  export default {
    name: "Users",
    data(){
      return {
        pageInfo:{
          quire:'',
          /*当前页数*/
          pagenum:1,
          /*当前每页显示条数*/
          pagesize:4,
      },
        /*用户的数据列表*/
        usersLists:[],
       /* 总共的数据条数*/
        total:100,
      };
    },
    created(){
      /*请求用户的数据*/
      this.getInitUserInfo();
    },
    methods:{
      /*初始化获取用户的数据 API*/
      getInitUserInfo(type){
        getUsersInfo(type,this.pageInfo.pagenum,this.pageInfo.pagesize).then(res => {
          if(!res.code === 0 ){
            this.$message.error('数据补存在');
            return;
          }
          /*用户列*/
          this.usersLists = res.data.userLists;
          /*用户总条数*/
          this.total = res.data.total;
        }).catch(err =>{
          console.log(err);
        });
      },
      /* 状态操执行事件 API*/
      getchange(userInfo){
        /*请求后台更改操作的状*/
        updateStsuts(userInfo.value).then(res =>{
          console.log(res);
          console.log(userInfo);
        }).catch(err => {
          console.log(err);
        });
        //console.log(userInfo.value);
      },
      /*每页显示的条数*/
      handleCurrentChange(Page){
        this.pageInfo.pagenum = Page;
        this.getInitUserInfo();
      },
      /*当前的页数*/
      handleSizeChange(Size){
        this.pageInfo.pagesize = Size;
        this.getInitUserInfo();
      },
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
