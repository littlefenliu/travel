<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
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
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
        RecommendFooter
    },
    data() {
        return {
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo (){
            axios.get('/api/index.json?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res){
            res=res.data
            // 如果正确返回结果 && 有内容
            if(res.ret && res.data){
                const data=res.data
                this.swiperList=data.swiperList
                this.iconList=data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted (){
        this.lastCity=this.city
        this.getHomeInfo();
    },
    // 当页面重新显示的时候，activated会被重新执行
    activated(){
        if(this.lastCity!==this.city){
            this.lastCity=this.city
            this.getHomeInfo();
        }
    }
}
</script>
<style>

</style>
