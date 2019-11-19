<template>
  <div id="app">
    <el-row>
      <el-col :span="4"><!--<div class="grid-content bg-purple"></div>-->
        <Aside/>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="24">
            <!--<div class="grid-content bg-purple"></div>-->
              <Header/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Aside from "./views/aside/Aside";
  import Header from "./views/header/Header";
export default {
  name: 'app',
  components: {
    Aside,
    Header,
  }
}
</script>

<style>
  body{
    margin: 0;
  }

  .gt-aside,.gt-header,.gt-main,.gt-footer{
    background-color: #B3C0D1;
  }

  .gt-aside{
    background-color: antiquewhite;
    height: 100%;
  }

  .gt-header{
    background-color: darkgray;
    height: 70px;
  }
  .gt-main{
    background-color: aquamarine;
    height: 130px;
  }

  .gt-footer{
    background-color: #B3C0D1;
    height: 40px;
  }


  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
