<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    /* 在css中引入其他的css，要使用@符号，需要在前面添加~ */
    @import "~@/assets/styles/varibles.styl";

    /* 1rem = html font-size = 50px */
    /* 1px = 0.02rem */
    .header
        display: flex
        line-height: .86rem /* 2倍图下43px */
        background: $bgColor
        color: #fff

        .header-left
            width: .64rem
            float: left

            .back-icon
                text-align: center
                font-size: .4rem

        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            background: #fff
            border-radius: 0.1rem
            color: #ccc
            text-align: left
            padding-left: .2rem

        .header-right
            width: 1.24rem
            float: right
            text-align: center

            .arrow-icon
                font-size: .24rem
                margin-left: -.04rem


</style>










