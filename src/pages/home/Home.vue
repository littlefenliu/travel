<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
        <recommend-footer></recommend-footer>
    </div>
</template>

<script>
// 引入局部组件 需要注册
import HomeHeader from'./components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import RecommendFooter from './components/RecommendFooter'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
        RecommendFooter
    }
}
</script>
<style>

</style>
