<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'MyCategory',
    data() {
        return {
            categoryList: [],//列表
            inputSearh: '',//搜索库名
        }
    },
    methods: {
        // 创建分类
        addCategory() {
            this.axios({
                method: 'post',
                url: 'repo/manage/',
                data: {
                    "name": this.inputSearh,
                    "r_type": "public"
                }
            }).then(res => {
                console.log(res);
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
                this.categoryList.push(res.data);
            })
        },
        // 搜索分类
        searchCategory() {
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
            })
        }
    },
    mounted() {
        this.axios({
            method: 'get',
            url: 'repo/common/with_user/?page=1&searchKey='
        }).then(res => {
            this.categoryList = res.data.results;
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped lang="less">
.operateArea {
    width: 80%;
    margin: 20px auto;

    .el-input {
        width: 60%;
        margin-right: 20px;
    }
}

.cardType {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;

    .box-card {
        border: none;
        margin: 10px;
        min-width: 332px;
        position: relative;

        h2 {
            padding-bottom: 16px;
        }

        .tabName {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
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

::v-deep .el-card__body {
    padding: 20px 0 20px 20px;
}
</style>