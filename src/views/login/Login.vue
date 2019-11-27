<template>
  <div class="login-content">
    <div class="login-form">
      <div class="avatar-box">
        <img src="https://cn.vuejs.org//images/logo.png" alt="">
      </div>
      <el-form ref="loginFormRef" :model="loginForm" class="login_form" :rules="loginFormRules">
        <h3>后台登录界面</h3>
        <!--用户账号-->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!--用户密码-->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <!--执行事件-->
        <el-form-item class="bnts">
          <el-button type="primary" round @click="login()">登 录</el-button>
          <el-button type="info" @click="reset()" round>重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { requestLogin } from "../../network/home";
  //const token = 'adadaa';
  export default {
    name: "Login",
    data(){
      return {
        /*表单数据绑定对象*/
        loginForm: {
          username:'111',
          password:'111111',
        },
        /*验证规则*/
        loginFormRules:{
          username:[
            { required: true, whitespace:true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
            {whitespace:true, message:'不要填写空格 和 特殊符'},
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 45 个字符', trigger: 'blur' },
            {whitespace:true, message:'不要填写空格 和 特殊符'},
          ],
        },
      };
    },
    created(){},
    methods:{
      /*登录*/
      login(){
        this.$refs.loginFormRef.validate((valid)=>{
          /*判断验证是否通过*/
          if(!valid) return;
          /*验证通过请求服务器*/
          requestLogin(this.loginForm).then(res =>{
            console.log(res);
            if(!(res.code === 0)){
              this.$message.error(res.msg);
              return;
            }
              this.$message.success(res.msg);
              /*保存token的信息*/
              window.sessionStorage.setItem("token",res.code.token);
              /*等待2秒进行页面跳转*/
              setTimeout(() => {this.$router.push('/home');}, 2000);
          }).catch(err => {
            console.log(err);
            this.$message.error(err);
          });
        });
      },
      /*重置*/
      reset(){
        this.$refs.loginFormRef.resetFields();
      },
    },
  }
</script>

<style lang="scss" scoped>
  /*声明变量*/
  $highlight-color: #B3C0D1;

  .login-content{
    height: 100%;
    background-image: url("../../assets/login_img.jpeg");
    background-size: cover;
    background-color: $highlight-color;
  }

  .login-form{
    width: 450px;
    height: 340px;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -250px;
    margin-left: -175px;
  }

  .avatar-box{
    border: 1px solid #ffffff;
    border-radius: 50%;
    padding: 10px;
    width: 130px;
    height: 130px;
    box-shadow: 0 0 10px #B3C0D1;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: -80px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #D3DCE6;
    }
  }

  .login_form{
    position: absolute;
    bottom:0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    h3{
      font-size: 30px;
      color: #409EFF;
      text-align: center;
    }
  }

  .bnts{
    display: flex;
    justify-content: flex-end;
  }
</style>
