<template>
    <div>
        <el-container>
            <el-header>
                <div class="logo">
                    LOGO
                </div>
                <div class="tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="文章" name="home"></el-tab-pane>
                        <el-tab-pane label="分类" name="category"></el-tab-pane>
                        <el-tab-pane label="发布文章" name="third"></el-tab-pane>
                        <el-tab-pane label="个人中心" name="fourth"></el-tab-pane>
                    </el-tabs>
                </div>
                <div class="userLogin">
                    <div v-if="!userNameShow">
                        <el-button round @click="dialogFormVisible = true">登录</el-button>
                        <el-button round>注册</el-button>
                    </div>
                    <div class="userLogin_flex" v-else>
                        <el-avatar size="small" :src="circleUrl"></el-avatar>
                        <span>{{ userName }}</span>
                    </div>
                    <el-dialog title="登录" :visible.sync="dialogFormVisible">
                        <el-form class="login-form" :rules="rules" ref="formLogin" :label-position="'right'"
                            label-width="70px" :model="formLogin">
                            <el-form-item label="账号：" prop="username" required>
                                <el-input v-model="formLogin.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码：" prop="password" required>
                                <el-input type="password" v-model="formLogin.password"></el-input>
                            </el-form-item>
                            <el-form-item style="margin-left: 0 !important;">
                                <el-button type="primary" @click="submitLogin('formLogin')">登录</el-button>
                                <el-button @click="dialogFormVisible = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </el-dialog>
                </div>
                <div class="search">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchContent">
                    </el-input>
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
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            userNameShow: false,//用户登录名显示
            userName: '',
            dialogFormVisible: false,//登录框的显示
            formLogin: {
                username: 'forzhang',//登录账号
                password: 'xxxxxxxx'//登录密码
            },
            rules: {//校验规则
                username: [
                    { required: true, message: '请输入账号名称', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ]

            }
        };
    },
    methods: {
        // 点击标签切换
        handleClick(tab) {
            this.$router.push(tab.name).catch(() => { });
        },
        // 登录验证
        submitLogin(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 发送 POST 请求
                    this.axios({
                        method: 'post',
                        url: 'account/sign_in/',
                        data: {
                            username: this.formLogin.username,
                            password: this.formLogin.password
                        }
                    }).then((response) => {
                        this.$message({
                            message: response.msg,
                            type: 'success'
                        });
                        // 登录成功存username到localstorage里面，并读取出来显示到页面上
                        this.userNameShow = true;
                        localStorage.setItem('username', response.data.username);
                        this.userName = localStorage.getItem('username');
                        // 登录成功登录框隐藏
                        this.dialogFormVisible = false;
                    }).catch((error) => {
                        this.$message.error(error.response.data.msg);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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
        float: right;
        width: 280px;
        margin-right: 10px;
    }

    .userLogin {
        float: right;
        width: 162px;
        height: 60px;

        .userLogin_flex {
            float: right;
            width: 108px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
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
    line-height: 593px;
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

::v-deep .el-input__inner {
    height: 26px;
}
</style>