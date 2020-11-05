<template>
  <div>
        <div 
            class="item"
            v-for="(item,index) of list"
            :key="index">
            <div class="item-title">
                <span class="item-title-icon">&nbsp;</span>
                {{item.title}}
            </div>
            <div v-if="item.type" class="item-children">
                <detail-list :list="item.type"></detail-list>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:"DetailList",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
.item-title
    position relative
    left .2rem
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
        background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
        border-radius: .06rem;
        height: .24rem;
        min-width: .08rem;
        margin-right: .12rem;
.item-children
    padding 0 .5rem
       
</style>