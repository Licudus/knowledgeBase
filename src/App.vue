<template>
  <div id="app">
    <!-- <router-link to="login">登录</router-link>
    <router-link to="home">主页</router-link>
    <router-view></router-view> -->
    <MyLogin></MyLogin>
  </div>
</template>

<script>
import MyLogin from './pages/MyLogin'
export default {
  name: 'App',
  components: {
    MyLogin
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
