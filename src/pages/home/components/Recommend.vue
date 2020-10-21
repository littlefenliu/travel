<template>
    <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
            <img class="item-img" :src='item.imgUrl' alt="">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data() {
        return {
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_200x200_0b707f70.jpg',
                title:'南京总统府',
                desc:'见证了太平天国与两江总督衙门的兴衰见证了太平天国与两江总督衙门的兴衰'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_200x200_a1ff6094.jpg',
                title:'牛首山文化旅游区',
                desc:''
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_200x200_72a1d26d.jpg',
                title:'红山森林动物园',
                desc:''
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1603/4e/4ec01cc307848a5890.water.jpg_200x200_e33cead8.jpg',
                title:'钟山风景区',
                desc:''
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1512/95/9579bcb3e5a206cc90.water.jpg_200x200_aaa2ccea.jpg',
                title:'大报恩寺遗址公园',
                desc:'长干里是江南佛教圣地素有“佛陀里”之美'
            },{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1909/90/90a9270d2b17ebf1a3.img.jpg_200x200_acea5d85.jpg',
                title:'南京金牛湖野生动物王国',
                desc:'🔥好评如潮，小伙伴热推景点~'
            },]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommend-title
    margin-top: .2rem
    line-height :1rem
    background :#eee
    font-size: .3rem
    text-indent : .2rem
.item
    display: flex
    height: 1.9rem
    overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex 1
    min-width :0
    padding: .1rem
    font-size: .35rem
    .item-title
        line-height: .54rem
        font-size: .4rem
        font-weight :bold
    .item-desc
        ellipsis()
        margin-top: .2rem
        line-height:.4rem
    .item-button
        margin-top: .2rem
        background-color #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color:#fff
</style>