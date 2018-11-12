<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'

    export default {
        name: "Home",
        components: {
            'home-header': HomeHeader,
            'home-swiper': HomeSwiper,
            'home-icons': HomeIcons
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>










