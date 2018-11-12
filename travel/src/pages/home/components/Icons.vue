<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="icon in page" :key="icon.id">
                    <div class="icon-img-div">
                        <img class="icon-img" :src="icon.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{icon.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data: function () {
            return {
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票景点门票景点门景点门票景点门票景点门'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: '一日游'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: '上海必游'
                    },
                    {
                        id: '0004',
                        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                        desc: '上海海昌'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
                        desc: '赏秋色'
                    },
                    {
                        id: '0006',
                        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        desc: '打卡圣地'
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        desc: '上海欢乐谷'
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                        desc: '野生动物园'
                    },
                    {
                        id: '0009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
                        desc: '上海迪斯尼'
                    }
                ]
            }
        },
        computed: {
            pages: function () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import "~@/assets/styles/varibles.styl";
    @import "~@/assets/styles/mixins.styl";

    /* 滑动根布局 */
    .icons >>> .swiper-container
        overflow hidden
        height 0
        padding-bottom 50%

    .icons
        margin-top .1rem

        .icon
            position relative
            overflow hidden
            float left
            height 0
            width 25%
            /* 宽度的四分之一 */
            padding-bottom 25%

            .icon-img-div
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem

                .icon-img
                    display block
                    margin 0 auto
                    height 100%

            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                line-height .44rem
                height .44rem
                color $darkTextColor
                text-align center
                ellipsis()
</style>



