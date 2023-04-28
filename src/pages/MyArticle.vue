<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide><img src="../assets/slider1.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/slider2.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/slider3.png" alt=""></swiper-slide>

                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <!-- 文章 -->
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
            articleList: [],//文章列表
            swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 3000,

                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 设置点击箭头
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            }
        }
    },
    methods: {
        getArticle() {
            this.axios({
                method: 'get',
                url: 'doc/public/'
            }).then(res => {
                if (res.data.results) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.articleList = res.data.results;
                } else {
                    this.$message({
                        message: '请先发表文章哦！',
                        type: 'warning'
                    });
                }
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

    //  若是修改默认样式，以下内容必须填写
    .wrapper {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;

        .swiper-container {
            width: 100%;
            height: 400px;
        }

        .swiper-slide img {
            width: 100%;
            height: 100%;
        }
    }

    .wrapper .swiper-button-next,
    .wrapper .swiper-button-prev {
        position: absolute;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        z-index: 22222;
        color: #ccc;
    }
}
</style>