<template>
    <div class="list" ref="wrapper">
    <div>
       <div class="area">
           <div class="title border-top-bottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                <div class="button">南京</div>
                </div>
            </div>
        </div>

       <div class="area">
           <div class="title border-top-bottom">热门城市</div>
           <div class="button-list">
                <div class="button-wrapper" v-for="item of hot" :key="item.id">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
       </div>

        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
           <div class="title border-top-bottom">{{key}}</div>
           <div class="item-list">
               <div 
                    class="item border-bottom" 
                    v-for="innerItem of item" 
                    :key="innerItem.id">
                    {{innerItem.name}}
                </div>
           </div>
        </div>
    </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
    name:"CityList",
    props:{
        cities: Object,
        hot: Array,
        letter:String
    },
    mounted() {
        this.scroll=new Bscroll(this.$refs.wrapper)
        // console.log(this.$refs);
    },
    watch:{
        // 监听letter变化
        letter() {
            // 如果字符非空，会自动滚到字符开头的位置
            if(this.letter){
                // better-scroll参数需要使用dom  
                const element=this.$refs[this.letter][0] //dom形式
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variables.styl"
.list 
    overflow hidden
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    margin-top 1.6rem
    .border-top-bottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
    .border-bottom
        &:before
            border-color: #eee
        &:after
            border-color: #eee
    .title 
        line-height .44rem
        font-size .26rem
        background-color #eee
        paddind-left .2rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem
        padding: .1rem
      .button-wrapper
        float left
        width 33.33%
      .button
        text-align center
        margin .1rem 
        padding .1rem 0
        border .02rem solid #ccc
        border-radius .06rem  
    .item-list > .item
        line-height .76rem
        padding-left .2rem
</style>