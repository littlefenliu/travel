<template>
  <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide 
            v-for="(item,index) in imgs"
            :key="index">
            <img class='gallary-img' :src="item" alt="">
            </swiper-slide>
            <!-- 显示分页内容 小圆点-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>

export default {
    name:'CommonGallary',
     props:{
         imgs:{
            type: Array,
            default (){
                return []
            }
        }
    },
    data (){
        return {
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
       }
    }
}
</script>

<style lang="stylus" scoped>
.container>>>.swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    position fixed
    z-index 99
    left 0
    top 0
    right 0
    bottom 0
    background-color #000
    .wrapper
        height 0
        width 100%
        padding-bottom 63%
        background-color #fff
        .gallary-img
            width 100%
        .swiper-pagination
            bottom -1rem
            color #fff
</style>
