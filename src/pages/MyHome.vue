<template>
    <el-container>
        <el-header>
            <div class="logo">
                LOGO
            </div>
            <div class="tab">
                <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" router>
                    <el-menu-item index="/home/article">文章</el-menu-item>
                    <el-menu-item index="/home/category">分类</el-menu-item>
                    <el-menu-item index="/home/publish">发布文章</el-menu-item>
                    <el-menu-item index="/home/user">个人中心</el-menu-item>
                </el-menu>
            </div>
            <div class="userLogin">
                <div v-if="!userNameShow">
                    <el-button round @click="goLogin">登录</el-button>
                    <el-button round>注册</el-button>
                </div>
                <div class="userLogin_flex" v-else>
                    <el-avatar size="small" :src="circleUrl"></el-avatar>
                    <span>{{ userName }}</span>
                    <span @click="exitLogin" class="exitlog">[退出登录]</span>
                </div>
            </div>
            <div class="search">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchContent">
                </el-input>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: 'MyHome',
    data() {
        return {
            searchContent: '',//当前搜索内容
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            userNameShow: false,//用户登录名显示
            userName: '',
        };
    },
    methods: {
        // 跳转登录
        goLogin() {
            this.$router.push('/login').catch(() => { });
        },
        // 退出登录
        exitLogin() {
            localStorage.removeItem('username');
            // 删掉cookies，删不掉
            Cookies.remove('wiki-repo-auth-token');
            // 刷新页面
            this.$router.go(0);
        }
    },
    mounted() {
        // 页面一挂载判断，localstorage里面是否存在用户名username，登录成功显示用户名
        let uname = localStorage.getItem('username');
        if (uname) {
            this.userNameShow = true;
            this.userName = uname;
        }
    }
}
</script>

<style scoped lang="less">
.el-container.is-vertical {
    height: 100%;
}

.el-header {

    // logo
    .logo {
        float: left;
        width: 72px;
        height: 100%;
    }

    // 导航栏
    .tab {
        float: left;
        width: 400px;
        margin-left: 20px;
    }

    // 搜索区
    .search {
        float: right;
        width: 280px;
        margin-right: 36px;
    }

    // 登录，用户名
    .userLogin {
        float: right;
        width: 162px;
        height: 60px;

        .userLogin_flex {
            float: right;
            width: 182px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .exitlog {
                cursor: pointer;
            }
        }
    }
}

// 头部和尾部
.el-header,
.el-footer {
    position: fixed;
    background-color: #91c788;
    text-align: center;
    line-height: 60px;
    width: 100%;
    z-index: 99;
}

.el-header {
    top: 0;
    left: 0;
}

.el-footer {
    bottom: 0;
    left: 0;
}

// 主内容区
.el-main {
    height: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 0;
}

body>.el-container {
    margin-bottom: 40px;
}

::v-deep .el-input--prefix .el-input__inner {
    padding-left: 30px;
    height: 30px;
}

// 导航菜单
::v-deep .el-menu {
    background-color: #91c788;
}

::v-deep .el-menu--horizontal>.el-menu-item {
    color: #f0f9eb;
}

::v-deep .el-menu--horizontal>.el-menu-item.is-active,
::v-deep .el-menu--horizontal>.el-menu-item:hover,
::v-deep .el-menu--horizontal>.el-menu-item:focus {
    border-bottom: 2px solid #edf3c7;
    color: #edf3c7;
    background-color: #91c788;
}

// 登录和注册按钮
::v-deep .el-button.is-round {
    padding: 8px 16px;
}

.el-button {
    color: #9da0a8;
}

.el-menu.el-menu--horizontal {
    border: none;
}
</style>