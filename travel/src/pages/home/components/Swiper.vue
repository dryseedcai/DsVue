<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper" ref="swiperSwiper">
            <swiper-slide v-for="(item, index) in swiperList">
                <img class='swiper-img'
                     v-bind:key="item.id"
                     v-bind:src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            swiperList: Array
        },
        data: function () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 3000
                }
            }
        },
        computed: {
            showSwiper(){
                return this.swiperList.length;
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    /* 等价于：
     .wrapper
         width: 100%
         height: 26.6vw
         background: #eee*/

    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff

    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.6%
        background: #eee

        .swiper-img
            width: 100%

</style>




