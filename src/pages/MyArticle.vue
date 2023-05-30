<template>
    <div class="container">
        <!-- 搜索区 -->
        <MySearch></MySearch>
        <div class="content">
            <!-- 文章 -->
            <div class="articlePresentation">
                <el-card v-for="item in articleList" :key="item.id" class="cardflex">
                    <div>
                        <el-image style="width: 100px; height: 100px" :src="url" fit='fill'></el-image>
                    </div>
                    <div class="rightArticle">
                        <h2>{{ item.title }}</h2>
                        <h3>{{ item.title }}</h3>
                        <div class="iconAll">
                            <div class="iconBottom">
                                <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                            </div>
                            <div class="iconBottom">
                                <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                            </div>
                            <div class="iconBottom">
                                <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
            <!-- 个人中心 -->
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
            <!-- 热门文章 -->
            <div class="hotArticle">
                <el-card>
                    <div class="hotTitle">
                        热门文章
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
        </div>
    </div>
</template>

<script>
import MySearch from '@/components/MySearch';
export default {
    name: 'MyArticle',
    components: { MySearch },
    data() {
        return {
            articleList: [],//文章列表

            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

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
                    });
                    this.articleList = res.data.results;
                } else {
                    this.$message({
                        message: '请先发表文章哦！',
                        type: 'warning'
                    });
                }
            })
        }
    },
    mounted() {
        this.getArticle();
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
    }
}
</style>