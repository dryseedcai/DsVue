<template>
    <div class="list" ref="wrapper">
        <!--这里要注意的是，better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。-->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                            class="button-wrapper"
                            v-for="item in hotCities"
                            :key="item.id"
                            @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
                    class="area"
                    v-for="(item, key) in cities"
                    :key="key"
                    :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                            class="item border-bottom"
                            v-for="innerItem in item"
                            :key="innerItem.id"
                            @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hotCities: Array,
            letter: String
        },
        data() {
            return {}
        },
        computed: {},
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
            letter() {
                if (this.letter) {
                    //console.log(this.$refs[this.letter]); //输出的是v-for的数组
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        },
        methods: {
            handleCityClick(city) {
                //调用store的actions中的方法
                //this.$store.dispatch("changeCity", city);
                //调用store的mutations中的方法
                this.$store.commit("changeCity", city);
                this.$router.push('/')
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl";

    .border-topbottom
        &:before
            border-color: #ccc

        &:after
            border-color: #ccc

    .border-bottom
        &:before
            border-color: #ccc

    .list
        /* 这段代码作用是让列表不能滑动，配合BetterScroll使用 */
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0

        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem

        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem

            .button-wrapper
                float: left
                width: 33.33%

                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem

        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>
