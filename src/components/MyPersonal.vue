<template>
  <div class="individualCenter">
    <el-card>
      <!-- 头部图片 -->
      <div class="headPicture">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <!-- 中间显示区 -->
      <div class="individualMessage">
        <div class="smallMess">
          <div>我的文章</div>
          <div>11</div>
        </div>
        <div class="smallMess">
          <div>我的文章</div>
          <div>11</div>
        </div>
        <div class="smallMess">
          <div>我的文章</div>
          <div>11</div>
        </div>
        <div class="smallMess">
          <div>我的文章</div>
          <div>11</div>
        </div>
      </div>
      <!-- 底部操作区 -->
      <div class="BottomOperation">
        <div class="btnSelf">个人中心</div>
        <div class="btnSelf">发表新文章</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyPersonal',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.individualCenter {
  width: 30%;
  position: absolute;
  right: 0;
  top: 0;

  .headPicture {
    height: 90px;
    display: flex;
    align-items: center;
    background: #a2c6aa;
    padding-left: 20px;
  }

  .individualMessage {
    display: flex;
    flex-wrap: wrap;

    .smallMess {
      display: flex;
      width: 50%;
      height: 50px;
      line-height: 50px;
      justify-content: center;
    }
  }

  .BottomOperation {
    display: flex;

    .btnSelf {
      position: relative;
      width: 50%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      background: #c5dcc8;
      color: #5b7657;
    }

    .btnSelf:nth-child(1)::after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 1px;
      height: 100%;
      background: #fff;
    }
  }

  ::v-deep .el-card__body {
    padding: 0;
  }
}
</style>