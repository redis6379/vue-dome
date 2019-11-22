<template>
  <el-container class="home-container">
    <!--头部信息-->
    <el-header>
      <div class="header-left">
        <img src="@/assets/logo.png" alt="">
        <span>后台首页</span>
      </div>
      <div class="header-reg">
        <div><i class="el-icon-edit"></i></div>
        <div><i class="el-icon-share"></i></div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">个人资料</el-dropdown-item>
              <el-dropdown-item command="b">重置</el-dropdown-item>
              <el-dropdown-item command="c">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <!--侧边菜单栏-->
      <el-aside width="200px">
        <el-menu background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router
                 :default-active="Active">
          <!--一级菜单-->
          <el-submenu index="1">
            <!--菜单的模板-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
             <!--文本-->
              <span>用户管理</span>
            </template>
            <el-menu-item :index="'/users'" @click="setActive('/users')">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户列表</span>
              </template >
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!--右侧显示内容-->
        <el-main>
          <!--面包削-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!--路由的显示内容-->
          <router-view></router-view>
        </el-main>
        <!--底部部分-->
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
  import { getAll } from "../../network/home";
  export default {
    name: "Home",
    data(){
      return {
        Active:'',
      };
    },
    created(){
      getAll(1,2).then(res =>{
          res.data;
      });
      this.Active = window.sessionStorage.getItem('Active');
    },
    methods:{
      handleCommand(command) {
        switch (command) {
          case 'a':
            this.$router.push('/userInfo');
            break;
          case 'b':
            alert(2);
            break;
          case 'c':
            window.sessionStorage.clear();
            this.$router.push('/login');
            break;
        }
      },
      setActive(user){
        this.Active = user;
        window.sessionStorage.setItem('Active',user);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home-container{
    height: 100%;
  }

  .el-header{
    display: flex;
    justify-content: space-between;
    background-color: #333333;
    > .header-left{
      align-items: center;
      display: flex;
    }
    > .header-left img{
      width:58px
    }
    > .header-left span{
      padding-left: 3px;
      font-size: 20px;
      color: #ffffff;
    }
    > .header-reg{
      display: flex;
      align-items: center;
      color: #ffffff;
    }
    > .header-reg div{
      padding-left: 10px;
    }
  }

  .el-aside{
    > .el-menu-item span {
      font-size: 20px;
    }
  }

  .el-aside{
    background-color: #545c64;
  }

  .el-main{
    background-color: #D3DCE6;
  }

  .el-footer{
    background-color: #333333;
  }

  .el-menu {
    border-right: solid 0 #e6e6e6;
  }
</style>
