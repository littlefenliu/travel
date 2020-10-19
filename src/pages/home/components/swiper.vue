<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swipList" :key='item.id'>
        <img class='swiper-img' :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- 显示分页内容 -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default{
    name:'HomeSwiper',
    data() {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swipList:[{
                id:'0001',
                imgUrl:'//img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_600x330_16d61609.jpg'
            },{
                id:'0002',
                imgUrl:'//img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_600x330_71495a0e.jpg'
            },{
                id:'0003',
                imgUrl:'//img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_600x330_dfb694b6.jpg'
            },{
                id:'0004',
                imgUrl:'//img1.qunarzz.com/sight/p0/1502/fa/fa9b584a8b8e47e9.water.jpg_600x330_a3a3a0f2.jpg'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .swiper-img
        width: 100%
</style>