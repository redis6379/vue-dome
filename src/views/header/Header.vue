<template>
  <el-row type="flex" class="gr-header">
    <el-col :span="4" class="header-be-left">
      <el-button v-show="isIcon" @click="clickIcon()" :size="30" class="el-icon-s-fold"></el-button>
      <el-button v-show="!isIcon" @click="clickIcon()" :size="30" class="el-icon-s-unfold"></el-button>
      <!--<el-button type="primary">主要按钮</el-button>-->
    </el-col>
    <el-col :span="11"></el-col>
    <el-col :span="7">
      <el-row :gutter="3">
        <el-col :span="12"></el-col>
        <el-col :span="3">
            <el-button type="warning" icon="el-icon-search" circle></el-button>
        </el-col>
        <el-col :span="3">
            <el-button type="warning" icon="el-icon-search" circle></el-button>
        </el-col>
        <el-col :span="3">
            <el-button type="warning" icon="el-icon-search" circle></el-button>
        </el-col>
        <el-col :span="3">
            <el-button type="warning" icon="el-icon-search" circle></el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2">
      <el-row>
        <el-col :span="8">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-col>
        <el-col :span="16">
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-col>
      </el-row>
      <!--<div class="demo-basic&#45;&#45;circle">
        <div class="block">
          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
          <el-dropdown class="gt-dropdown">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>-->
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        isIcon:true,
      };
    },
    methods:{
      clickIcon(){
        if(this.isIcon){
          this.isIcon = !this.isIcon;
        }else {
          this.isIcon = !this.isIcon;
        }
      }
    },
  }
</script>

<style scoped>
  .gr-header{
    height: 70px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .el-button{
    //margin-top: 6px;
  }

  .el-col{
    margin-top: 6px;
  }

  .header-be-left{
    margin-left: 10px;
  }

  .demo-basic--circle{
    margin-left: 8px;
  }

</style>
