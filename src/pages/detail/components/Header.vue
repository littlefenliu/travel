<template>
  <div>
      <router-link 
        tag="div" 
        to="/" 
        class="header-abs"
        v-show="showAbs">
        <span class="iconfont header-abs-back">&#xe66f;</span>
      </router-link>
       <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityState">
        景点详情
        <router-link to="/">
            <span class="iconfont header-fixed-back">&#xe66f;</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return {
            showAbs:true,
            opacityState:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top=document.documentElement.scrollTop;
            if(top > 60){
                let opacity= top / 140
                opacity=(opacity>1)? 1 : opacity
                this.opacityState={ opacity }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0,0,0,.8)
    .header-abs-back
        color #fff
        font-size .4rem
.header-fixed 
<<<<<<< HEAD
=======
        z-index 2
>>>>>>> detail-banner
        position fixed
        left 0
        top 0
        right 0
        height: .86rem
        line-height: .86rem
        text-align:center
        color: #fff
        background: $bgColor
        font-size: .32rem
    .header-fixed-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
</style>