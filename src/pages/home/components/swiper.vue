<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key='item.id'>
        <img class='swiper-img' :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- 显示分页内容 小圆点-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default{
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data() {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            }
        }
    },
    computed:{
        showSwiper() {
            return this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
    background: #fff !important 
.wrapper
    width: 100%
    height: 55%vm
    background-color: #ccc
    .swiper-img
        width: 100%

</style>