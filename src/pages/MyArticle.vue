<template>
  <div class="container">
    <!-- 搜索区 -->
    <MySearch></MySearch>
    <div class="content">
      <!-- 文章 -->
      <div class="articlePresentation">
        <el-card v-for="item in articleList" :key="item.id" class="cardflex" @click.native="getArticleDetail(item.id)">
          <div>
            <el-image style="width: 100px; height: 100px" :src="url" fit="fill"></el-image>
          </div>
          <div class="rightArticle">
            <h2>{{ item.title }}</h2>
            <h3>{{ item.title }}</h3>
            <div class="iconAll">
              <div class="iconBottom">
                <img src="../assets/person.png" alt />
                <span>{{ item.creator_name }}</span>
              </div>
              <div class="iconBottom">
                <img src="../assets/person.png" alt />
                <span>{{ item.creator_name }}</span>
              </div>
              <div class="iconBottom">
                <img src="../assets/person.png" alt />
                <span>{{ item.creator_name }}</span>
              </div>
            </div>
          </div>
        </el-card>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="4"
          layout="total, prev, pager, next, jumper"
          :total="8"
        ></el-pagination>
      </div>
      <!-- 个人中心 -->
      <MyPersonal></MyPersonal>
      <!-- 热门文章 -->
      <MyPopular></MyPopular>
    </div>
  </div>
</template>

<script>
import MySearch from '@/components/MySearch'
import MyPersonal from '@/components/MyPersonal'
import MyPopular from '@/components/MyPopular'
export default {
  name: 'MyArticle',
  components: { MySearch, MyPersonal, MyPopular },
  data() {
    return {
      articleList: [], //文章列表
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      currentPage: 1 //当前页
    }
  },
  methods: {
    getArticle() {
      this.axios({
        method: 'get',
        url: 'doc/public/'
      }).then(res => {
        if (res.data.results) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.articleList = res.data.results
        } else {
          this.$message({
            message: '请先发表文章哦！',
            type: 'warning'
          })
        }
      })
    },
    getArticleDetail(id) {
      console.log(id)
      this.$router.push({
        path: `articleDetails/${id}`
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted() {
    this.getArticle()
  }
}
</script>

<style scoped lang="less">
.container {
  height: 100%;
  color: #ccc;

  .content {
    position: relative;
    width: 60%;
    margin: 20px auto;

    .cardflex {
      margin: 10px 0;
      width: 67%;

      ::v-deep .el-card__body {
        display: flex;
      }

      .rightArticle {
        display: flex;
        flex-direction: column;
        margin-left: 24px;
        vertical-align: text-bottom;

        h2 {
          color: #545454;
          margin-bottom: 8px;
        }

        h3 {
          color: #454545;
          margin-bottom: 16px;
        }

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
    }
  }
}
</style>