<template>
    <div>
        <el-container>
            <el-header>
                <div class="logo">
                    LOGO
                </div>
                <div class="tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="文章" name="first"></el-tab-pane>
                        <el-tab-pane label="分类" name="second"></el-tab-pane>
                        <el-tab-pane label="发布文章" name="third"></el-tab-pane>
                        <el-tab-pane label="个人中心" name="fourth"></el-tab-pane>
                    </el-tabs>
                </div>
                <div class="search">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchContent">
                    </el-input>
                </div>
                <div class="userLogin">
                    <router-link to="login">登录</router-link>
                </div>

            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    data() {
        return {
            activeName: 'second',//当前标签
            searchContent: '',//当前搜索内容
        };
    },
    methods: {
        // 点击标签切换
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style scoped lang="less">
.el-header {

    .logo {
        float: left;
        width: 72px;
        height: 100%;
    }

    .tab {
        float: left;
        width: 400px;
        margin-left: 20px;

    }

    .search {
        float: left;
        width: 280px;
    }

    .userLogin {
        float: right;
        width: 76px;
    }
}

.el-header,
.el-footer {
    background-color: #91c788;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 525px;
}

body>.el-container {
    margin-bottom: 40px;
}

::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}

::v-deep .el-tabs__item.is-active {
    color: #e2f46f;
}

::v-deep .el-tabs__active-bar {
    background-color: #e2f46f;
}

::v-deep .el-tabs__item {
    color: #143002;
}

::v-deep .el-tabs__item:hover {
    color: #e2f46f;
}
</style>