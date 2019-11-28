import Vue from 'vue'
import App from './App.vue'
/*router 路由组件 （封装）*/
import router from "./router";
/*Element-UI组件*/
import ElementUI from 'element-ui';
/*组件 CSS*/
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
