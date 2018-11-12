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
        data: function () {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
                        title: '上海杜莎夫人蜡像馆',
                        desc: '上海市黄浦区南京西路2-68号新世界商厦10楼'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg',
                        title: '上海欢乐谷',
                        desc: '上海市松江区佘山镇林湖路888号'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                        title: '上海迪士尼乐园',
                        desc: '上海市浦东新区川沙新镇上海迪士尼度假区内'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg',
                        title: '上海影视乐园',
                        desc: '上海市松江区车墩镇北松公路4915号'
                    },
                ]
            }
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