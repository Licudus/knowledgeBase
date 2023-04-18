<template>
    <el-dialog title="登录" :visible.sync="dialogFormVisible" @close="cancelLogin">
        <el-form class="login-form" :rules="rules" ref="formLogin" :label-position="'right'" label-width="70px"
            :model="formLogin">
            <el-form-item label="账号：" prop="username" required>
                <el-input v-model="formLogin.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" required>
                <el-input type="password" v-model="formLogin.password"></el-input>
            </el-form-item>
            <el-form-item style="margin-left: 0 !important;">
                <el-button type="primary" @click="submitLogin('formLogin')">登录</el-button>
                <el-button @click="cancelLogin">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'MyLogin',
    data() {
        return {
            dialogFormVisible: false,//登录框的显示
            formLogin: {
                username: 'forzhang',//登录账号
                password: ''//登录密码
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
        }
    },
    methods: {
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
                        // 跳转到首页
                        this.$router.push('/home/article').catch(() => { });
                        // 登录成功存username到localstorage里面，并读取出来显示到页面上
                        this.userNameShow = true;
                        localStorage.setItem('username', response.data.username);
                        this.userName = localStorage.getItem('username');
                    }).catch((error) => {
                        this.$message.error(error.response.data.msg);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 取消登录
        cancelLogin() {
            this.dialogFormVisible = false;
            // 回到上一个页面
            this.$router.replace('home/article');
        }
    },
    mounted() {
        this.dialogFormVisible = true;
    }
}
</script>

<style></style>