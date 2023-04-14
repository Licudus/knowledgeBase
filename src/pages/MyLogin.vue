<template>
    <div class="login-box">
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
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
            },
            rules: {
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
                        this.$router.push({ path: 'home' }).catch(() => { });
                    }).catch((error) => {
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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