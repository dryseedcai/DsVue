<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul v-for="item in recommendList" :key="item.id">
            <li class="item border-bottom">
                <img class="item-img"
                     :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommendList: Array
        },
        data: function () {
            return {}
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import "~@/assets/styles/mixins.styl";

    .recommend-title
        line-height .8rem
        background #eee
        text-indent .2rem
        text-align left
        margin-top .2rem

    .item
        overflow hidden
        display flex
        height 1.9rem

        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem

        .item-info
            flex 1
            padding .1rem
            text-align left
            min-width 0

            .item-title
                line-height .54rem
                font-size .32rem
                text-align left
                ellipsis()

            .item-desc
                line-height .4rem
                font-size .28rem
                text-align left
                color #ccc
                ellipsis()

            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>