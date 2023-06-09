import Vue from 'vue'
import App from './App.vue';
// 引入elememtUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由器
import VueRouter from 'vue-router'
import router from './router';
// 引入axios
import axios from 'axios';
// 引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 引入swiper
import SwiperClass, { Pagination, Navigation } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(mavonEditor);

SwiperClass.use([Pagination, Navigation]);
Vue.use(VueAwesomeSwiper);
Vue.prototype.axios = axios;
// 设置基地址，api为代理服务器
axios.defaults.baseURL = '/api';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response);
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  let res = error.response;
  let req = error.request;
  if (res.status == 401 && req.responseURL.indexOf('sign_in') != -1) {
    return Promise.reject(error);
  }
  if (res.status == 401) {
    router.replace('/login');
  }
  return Promise.reject(error);
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {// reqireAuth为true，则该路由需要判断使用登录
    if (localStorage.getItem('username')) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next();
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
