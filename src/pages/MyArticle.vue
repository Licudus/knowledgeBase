<template>
    <div class="container">
        <div v-for="item in articleList" :key="item.id">
            <h2>{{ item.title }}</h2>
            创造者<span>{{ item.creator_name }}</span>
            <el-divider></el-divider>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyArticle',
    data() {
        return {
            articleList: []
        }
    },
    methods: {
        getArticle() {
            this.axios({
                method: 'get',
                url: 'doc/public/'
            }).then(res => {
                this.articleList = res.data.results;
                console.log(this.articleList);
            })
        }
    },
    mounted() {
        this.getArticle();
    }
}
</script>

<style scoped lang="less">
.container {
    height: 100%;
    color: #ccc;


}
</style>