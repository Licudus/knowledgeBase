<template>
    <div class="headSearch">
        <div class="headInput">
            <el-input v-model="SearchInput" placeholder="请输入内容"></el-input>
            <div class="homeImg"><img src="../assets/homeSearch.svg" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MySearch',
    data() {
        return {
            SearchInput: '',//文章搜索
        }
    },
}
</script>

<style lang="less" scoped>
.headSearch {
    height: 200px;
    line-height: 200px;
    background-color: #A1C7AA;

    .headInput {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        ::v-deep .el-input {
            width: 30%;

            .el-input__inner {
                border-radius: 20px;
                text-align: center;
                font-size: 16px;
                box-shadow: 0 0 1px;
            }

        }


        .homeImg {
            display: flex;
            justify-content: center;
            border-radius: 25px;
            width: 60px;
            height: 40px;
            margin-left: 12px;
            background: #79A73B;

            img {
                width: 50px;
            }
        }
    }
}
</style>