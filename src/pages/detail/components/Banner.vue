<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" 
            src="//img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_600x330_dfb694b6.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">南京总统府(AAAA景区)</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe666;</span>
                11
            </div>
        </div>
    </div>
    <common-gallary 
    :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary
    },
    data (){
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1508/fc/fcc02b326b402ea6.img.jpg_r_800x800_cfdb87e5.jpg',
                'http://img1.qunarzz.com/sight/p0/1508/ab/ab2dfd426a6a4bcf.img.jpg_r_800x800_729b24b2.jpg']
            }
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handleGallaryClose(){
            this.showGallary=false
        }
    }
        
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom: 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8)) 
        .banner-title
            font-size .3rem
            padding 0 .2rem
            flex 1
        .banner-number
            margin-top .2rem
            padding 0 .4rem
            line-height .4rem
            height .32rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .30rem
        .banner-icon
            font-size .30rem
</style>
