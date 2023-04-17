<template>
    <div>
        <!-- 操作区域 -->
        <div class="operateArea">
            <el-input v-model="inputSearh" placeholder="库名"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button type="success">创建</el-button>
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
    justify-content: space-between;
    margin: 40px;

    .box-card {
        margin-bottom: 20px;
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