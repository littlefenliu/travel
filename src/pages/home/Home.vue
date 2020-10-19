<template>
    <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <div>test</div>
    </div>
</template>

<script>
// 引入局部组件 需要注册
import HomeHeader from'./components/Header'
import HomeSwiper from './components/swiper'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>
<style>

</style>
