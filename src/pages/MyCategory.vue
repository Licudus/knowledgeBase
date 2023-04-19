<template>
    <div class="container">
        <!-- 操作区域 -->
        <div class="operateArea">
            <el-input v-model="inputSearh" placeholder="库名"></el-input>
            <el-button type="primary" @click="searchCategory">搜索</el-button>
            <el-button type="success" @click="addCategory">创建</el-button>
        </div>
        <!-- 列表显示区 -->
        <div class="cardType">
            <el-card class="box-card" v-for="item in categoryList" :key="item.id">
                <h2>{{ item.name }}</h2>
                <div class="tabName">
                    <el-tag type="warning">{{ item.r_type }}</el-tag>
                    <i class="el-icon-user-solid"></i>
                    <span class="separate">{{ item.creator_name }}</span>
                </div>
                <div class="timeName">
                    <el-tag type="info">创建于</el-tag>
                    <i class="el-icon-date"></i>
                    <span class="separate">{{ item.create_at }}</span>
                </div>
                <div class="isLock">
                    <i class="el-icon-unlock"></i>
                </div>
            </el-card>
        </div>
        <!-- 分页 -->
        <div class="paging">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[2, 4, 6, 8, 10]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="20">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCategory',
    data() {
        return {
            categoryList: [],//列表
            inputSearh: '',//搜索库名
            currentPage: 4,//当前页
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 创建分类
        addCategory() {
            // 用户输入创建值再发送请求
            if (this.inputSearh) {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.axios({
                    method: 'post',
                    url: 'repo/manage/',
                    data: {
                        "name": this.inputSearh,
                        "r_type": "public"
                    }
                }).then(res => {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.categoryList.push(res.data);
                    // 清理search框
                    this.inputSearh = '';
                    // 请求成功关闭加载中
                    loading.close();
                })
            } else {
                this.$message({
                    message: '请输入库名，再点击添加'
                });
            }

        },
        // 搜索分类
        searchCategory() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            this.axios({
                method: 'get',
                url: 'repo/common/with_user/?page=1',
                params: {
                    searchKey: this.inputSearh
                }
            }).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
                this.categoryList = res.data.results;
                // 清理search框
                this.inputSearh = '';
                // 请求成功关闭加载中
                loading.close();
            })
        }
    },
    mounted() {
        const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        this.axios({
            method: 'get',
            url: 'repo/common/with_user/?page=1&searchKey='
        }).then(res => {
            this.categoryList = res.data.results;
            loading.close();
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped lang="less">
.container {
    margin: auto;

    .operateArea {
        width: 80%;
        margin: 20px auto;
        text-align: center;


        .el-input {
            width: 60%;
            margin-right: 20px;
        }
    }

    .cardType {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px;

        .box-card {
            border: none;
            margin: 10px;
            min-width: 260px;
            max-height: 126px;
            position: relative;

            h2 {
                padding-bottom: 12px;
                font-size: 20px;
            }

            .tabName {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                span {
                    font-size: 12px;
                }
            }

            .timeName {
                display: flex;
                align-items: center;

                span {
                    font-size: 12px;
                }
            }

            .isLock {
                position: absolute;
                top: 0;
                right: 0;
                width: 70px;
                height: 100%;
                background-color: #90d4bd;
                text-align: center;
                line-height: 140px;
                font-size: 20px;
                color: whitesmoke;
            }

            .el-tag {
                margin-right: 10px;
                height: 20px;
                padding: 0px 5px;
                line-height: 18px;
            }

            .separate {
                margin-left: 4px;
            }
        }
    }

    .paging {
        margin: auto;
        display: table;
    }
}

::v-deep .el-card__body {
    padding: 18px 0 14px 18px;
}
</style>