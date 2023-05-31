<template>
  <div class="container">
    <el-card class="box-card">edf</el-card>
    <!-- 个人中心 -->
    <MyPersonal></MyPersonal>
    <!-- 热门文章 -->
    <MyPopular></MyPopular>
  </div>
</template>

<script>
import MyPersonal from '@/components/MyPersonal'
import MyPopular from '@/components/MyPopular'
export default {
  name: 'MyArticleDetails',
  components: { MyPersonal, MyPopular }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100%;
  width: 60%;
  color: #ccc;
  margin: 60px auto;
}
</style>