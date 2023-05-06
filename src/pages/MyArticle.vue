<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="homeSearch">
            <div class="homeInput">
                <el-input v-model="homeSearchInput" placeholder="请输入内容"></el-input>
                <div class="homeImg"><img src="../assets/homeSearch.svg" alt=""></div>
            </div>
        </div>
        <div class="content">
            <!-- 文章 -->
            <el-card v-for="item in articleList" :key="item.id" class="cardflex">
                <div>
                    <el-image style="width: 100px; height: 100px" :src="url" fit='fill'></el-image>
                </div>
                <div class="rightArticle">
                    <h2>{{ item.title }}</h2>
                    <h3>{{ item.title }}</h3>
                    <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                    <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                    <img src="../assets/person.png" alt=""><span>{{ item.creator_name }}</span>
                </div>
            </el-card>
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
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyArticle',
    data() {
        return {
            articleList: [],//文章列表
            homeSearchInput: '',//文章搜索
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

    .homeSearch {
        height: 200px;
        line-height: 200px;
        background-color: #A1C7AA;

        .homeInput {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;

            ::v-deep .el-input {
                width: 30%;

                .el-input__inner {
                    border-radius: 20px;
                    text-align: center;
                    font-size: 16px;
                    box-shadow: 0 0 1px;
                }

            }


            .homeImg {
                display: flex;
                justify-content: center;
                border-radius: 25px;
                width: 60px;
                height: 40px;
                margin-left: 12px;
                background: #79A73B;

                img {
                    width: 50px;
                }
            }
        }
    }

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
                img {
                    width: 20px;
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
                    width: 50%;
                    text-align: center;
                    height: 50px;
                    line-height: 50px;
                    background: #c5dcc8;
                    color: #5b7657;
                }

                .btnSelf:nth-child(1)::after {
                    content: '';
                    width: 1px;
                    background: #fff;
                }
            }

            ::v-deep .el-card__body {
                padding: 0;
            }
        }
    }
}
</style>