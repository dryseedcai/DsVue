<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
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
        data: function () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 3000
                },
                swiperList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/2f/5d414b44b44a4c02.jpg_750x200_99fa3ea3.jpg'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
                    }
                ]
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




