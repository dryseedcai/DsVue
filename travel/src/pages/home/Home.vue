<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    //引入View组件
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'
    //引入axios
    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            'home-header': HomeHeader,
            'home-swiper': HomeSwiper,
            'home-icons': HomeIcons,
            'home-recommend': HomeRecommend,
            'home-weekend': HomeWeekend,
        },
        mounted: function () {
            //console.log("mounted")
            this.lastCity = this.$store.state.city;
            this.getHomeInfo();
        },
        /**
         * <keep-alive>，页面重新被显示时，activated会被调用
         */
        activated: function () {
            //console.log("activated")
            if (this.lastCity !== this.$store.state.city) {
                this.lastCity = this.$store.state.city;
                this.getHomeInfo();
            }
        },
        methods: {
            getHomeInfo: function () {
                axios.get('/api/index.json?city=' + this.$store.state.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc: function (result) {
                result = result.data;
                if (result.ret && result.data) {
                    this.swiperList = result.data.swiperList
                    this.iconList = result.data.iconList
                    this.recommendList = result.data.recommendList
                    this.weekendList = result.data.weekendList
                }
            }
        },
        data: function () {
            return {
                lastCity: '',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>










