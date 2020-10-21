<template>
    <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key='item.id'>
            <div class="item-img-wrapper">
                <img class="item-img" :src='item.imgUrl' alt="">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommend-title
    line-height :1rem
    background :#eee
    text-indent : .2rem
  .item-img-wrapper
    height: 0
    overflow :hidden
    padding-bottom:38%
  .item-img
   width :100%
  .item-info
    flex 1
    min-width :0
    padding: .1rem
    font-size: .25rem
    .item-title
        line-height: .48rem
        font-size: .3rem
    .item-desc
        ellipsis()
        line-height:.4rem
</style>