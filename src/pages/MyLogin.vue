<template>
    <div class="login-box">
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
            <el-form class="login-form" :label-position="'right'" label-width="60px" :model="formLogin">
                <el-form-item label="账号：">
                    <el-input v-model="formLogin.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input v-model="formLogin.password"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 0 !important;">
                    <el-button type="primary" @click="submitLogin">登录</el-button>
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'MyLogin',
    data() {
        return {
            dialogFormVisible: true,
            formLogin: {
                username: 'forzhang',
                password: 'xxxxxxxx'
            }
        }
    },
    methods: {
        submitLogin() {
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
                console.log(this.$route);
                this.$router.push({ path: 'home' })
            }).catch((error) => {
                console.log(error);
            });
            this.dialogFormVisible = false;
        }
    }
}
</script>

<style lang="less">
// .login-box {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(140, 136, 136, 0.3);


//     .login-content {
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         margin-top: -150px;
//         margin-left: -230px;
//         width: 460px;
//         height: 260px;
//         background-color: rgba(255, 255, 255, 1);
//         border-radius: 10px;
//         text-align: center;
//         padding: 20px;

//         h1 {
//             margin-bottom: 22px;
//         }

//         .login-form {}
//     }
// }
</style>