  //引入路由插件
import Vue from 'vue'
import VueRouter from 'vue-router'
  //懒加载文件
const Login = () => import('../views/login/Login');
const Home = () => import('../views/home/Home');
const Welcome = () => import('../views/home/Welcome');
const UserInfo = () => import('../views/home/UserInfo');
const Users = () => import('../views/home/Users');
  //安装插件
Vue.use(VueRouter)
  //定义路由
const routes = [
    //访问根目录重定向
  {path:'/',redirect:'/login'},
    //登录页面
  {path:'/login', component:Login},
    //后台首页
  {path:'/home', component:Home,
    redirect:'/welcome',
    children: [
        //首页系统信息
      { path: '/welcome', component: Welcome },
        //个人资料
      { path: '/userInfo', component: UserInfo },
        //用户列表
      { path: '/users', component: Users },

    ]
  },

];
  //创建路由
const router = new VueRouter({
  routes,
  mode:'history',
});
  //to 将要访问的路径//from 从哪个路径跳转//next 函数表示放行 next()放行 next('/login')强制跳转
router.beforeEach((to, from, next) => {
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if(to.path === '/login') return next();
  //判断token是否存在
  if(!tokenStr) return next('/login');
  next();
});
  //导出路由
export default router;

