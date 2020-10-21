<template>
    <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
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
    data() {
        return {
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
                title:'温泉必游',
                desc:'见证了太平天国与两江总督衙门的兴衰见证了太平天国与两江总督衙门的兴衰为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼，还你一个悠闲静雅之旅'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                title:'南京必打卡',
                desc:'看尽王侯将相荣辱成败，六朝金粉潮起潮落'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
                title:'民国情怀国共风华',
                desc:'南京，一座历史文化名城，这片土地上曾经经历过太多太多值得我们去追忆的往事'
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
                title:'秦淮金粉里的南京',
                desc:'欣赏秦淮风光上独具特色的人文景观，夫子庙里深刻体会古代科举制度'
            }]
        }
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
    padding-bottom:33.9%
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