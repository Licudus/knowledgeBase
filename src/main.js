import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import router from './router';
import Cookies from 'js-cookie'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.axios = axios;
axios.defaults.baseURL = '/api';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Cookies.set('name', 'www')
  console.log(Cookies.get('name'));
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
  if (res.status == 401 && Cookies.get('name') != 'www') {
    router.replace('/login');
  }
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
