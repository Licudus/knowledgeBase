<template>
    <div class="container">
        <div class="box">
            <div class="title">
                <el-input v-model="inputTitle" placeholder="请输入标题"></el-input>
            </div>
            <div class="artSubmit">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
        <mavon-editor v-model="markdownValue" />
    </div>
</template>

<script>
export default {
    name: 'MyArticle',
    data() {
        return {
            markdownValue: '',//markdown的值
            inputTitle: '',//标题名
        }
    },
}
</script>

<style scoped lang="less">
.container {
    height: 100%;

    .markdown-body {
        height: 100%;
    }
}
</style>