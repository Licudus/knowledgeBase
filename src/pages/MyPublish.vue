<template>
    <div class="container">
        <div class="box">
            <div class="title">
                <el-input v-model="inputTitle" placeholder="请输入标题"></el-input>
            </div>
            <div class="artSubmit">
                <el-button type="primary" @click="drawer = true">提交</el-button>
                <el-button @click="clearAll">清空</el-button>

                <el-drawer title="发布文章" :visible.sync="drawer" :before-close="handleClose">
                    <label>分类：</label>
                    <el-select v-model="selectType" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" @click="canclePublish">取消</el-button>
                    <el-button type="primary" @click="publishArticle">确定并提交</el-button>
                </el-drawer>
            </div>
        </div>
        <mavon-editor v-model="markdownValue" />
    </div>
</template>

<script>
export default {
    name: 'MyPublish',
    data() {
        return {
            markdownValue: '',//markdown的值
            inputTitle: '',//标题名
            drawer: false,//抽屉是否打开
            selectType: '',//分类值
            options: [{//分类选项
                value: '选项1',
                label: '后端'
            }, {
                value: '选项2',
                label: '前端'
            }],
            done: ''
        }
    },
    methods: {
        // 关闭抽屉
        handleClose(done) {
            done();
        },
        // 发布文章
        publishArticle() {
            this.axios({
                method: 'post',
                url: 'doc/manage/',
                data: {
                    "title": this.inputTitle,
                    "repo_id": 1,
                    "content": this.markdownValue
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        },
        // 取消发布
        canclePublish() {
            this.drawer = false;
        },
        // 清空
        clearAll() {
            this.markdownValue = '';
            this.selectType = '';
            this.inputTitle = ''
        }
    }
}
</script>

<style scoped lang="less">
.container {
    height: 100%;
    color: #ccc;

    .box {
        width: 100%;
        height: 60px;
        background-color: white;

        .title {
            width: 50%;
            float: left;

            ::v-deep .el-input__inner {
                height: 60px;
                line-height: 60px;
                border: none;
            }
        }

        .artSubmit {
            float: right;
            line-height: 54px;
            margin-right: 10px;

            ::v-deep .el-drawer__header {
                margin-bottom: 0;
                padding: 0 20px 0;
                border-bottom: 1px solid #ccc;
            }

            .el-drawer__body {
                text-align: center;
            }
        }
    }

    .markdown-body {
        height: 100%;
    }
}
</style>