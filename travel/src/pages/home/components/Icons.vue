<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showSwiper">
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
        props: {
            iconList: Array
        },
        data: function () {
            return {
                swiperOption: {
                    autoplay: false
                },
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
            },
            showSwiper: function () {
                return this.iconList.length;
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



