<template>
  <div class="container">
    <el-card class="box-card">
      <h1>爱你就像爱生命</h1>
      <div class="iconAll">
        <div>
          <el-button type="success" round>成功按钮</el-button>
        </div>
        <div class="iconBottom">
          <img src="../assets/person.png" alt />
          <span>哈比老师</span>
        </div>
        <div class="iconBottom">
          <img src="../assets/person.png" alt />
          <span>9999-99-99</span>
        </div>
        <div class="iconBottom">
          <img src="../assets/person.png" alt />
          <span>轻松</span>
        </div>
      </div>
    </el-card>
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
  width: 70%;
  color: #ccc;
  margin: 60px auto;
  .iconAll {
    display: flex;

    .iconBottom {
      margin-right: 10px;

      img {
        width: 20px;
        margin-right: 6px;
      }
    }
  }
}
</style>