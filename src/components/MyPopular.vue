<template>
  <div class="hotArticle">
    <el-card>
      <div class="hotTitle">热门文章</div>
      <div class="hotDisplay">
        <div>
          <el-avatar shape="square" :size="50" :src="url"></el-avatar>
        </div>
        <div class="rightArticle">
          <h3>合适的快速导航</h3>
          <h4>合适的快速导航</h4>
        </div>
      </div>
      <div class="hotDisplay">
        <div>
          <el-avatar shape="square" :size="50" :src="url"></el-avatar>
        </div>
        <div class="rightArticle">
          <h3>合适的快速导航</h3>
          <h4>合适的快速导航</h4>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyPopular',
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style lang="less" scoped>
.hotArticle {
  position: absolute;
  top: 256px;
  right: 0;
  width: 30%;

  .hotTitle {
    font-weight: 700;
    height: 50px;
    background: #a2c6aa;
    color: #567852;
    text-align: center;
    line-height: 50px;
  }

  .hotDisplay {
    display: flex;
    align-items: center;
    border: 1px solid #ced2d1;
    margin: 6px;
    padding: 10px;
    box-shadow: 0 0 2px #ced2d1;

    .rightArticle {
      margin-left: 16px;

      h3 {
        color: #575757;
      }

      h4 {
        color: #5f5f5f;
      }
    }
  }

  ::v-deep .el-card__body {
    padding: 0;
  }
}
</style>
