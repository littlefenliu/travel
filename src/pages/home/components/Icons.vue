<template>
    <div class="icons">
        <swiper>
            <!-- 轮播图有两页 每一页根据page内容展示 -->
            <swiper-slide v-for="(page,index) of pages" :key='index'>
            <div class="icon" v-for="item of page" :key='item.id'>
                <div class="icon-img" >
                <img class='icon-img-content' :src="item.imgSrc" alt="">
                <p class='icon-desc'>{{item.name}}</p>
                </div>
            </div>
        </swiper-slide>
        <!-- 显示分页内容 小圆点-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeIcons",
    data(){
        return {
            imgList:[{
                id:'001',
                // 文字超出限制 设置省略号
                name:'景点门票景点门票景点门票景点门票',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png'
            },{
                id:'002',
                 name:'一日游',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png'
            },{
                id:'003',
                 name:'总统府',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/bd121884123cceb4da978047423421ce.png'
            },{
                id:'004',
                name:'牛首山',
                imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png'
            },{
                id:'005',
                name:'红山森林',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png'
            },{
                id:'006',
                 name:'大报恩寺',
                imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png'
            },{
                id:'007',
                 name:'钟山风景区',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png'
            },{
                id:'008',
                 name:'夫子庙',
                imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png'
            },{
                id:'009',
                 name:'动物园',
                imgSrc:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png'
            }]
        }
    },
    // 计算属性 自带缓存
    computed:{
        pages() {
            const pages=[]
            this.imgList.forEach((item,index) => {
                // 数据展示在轮播图的第几页
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            // 二维数组
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height:0
    padding-bottom: 50%
  .icon 
    position: relative
    float: left
    height: 0
    width:25%
    padding-bottom: 25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
  .icon-img-content
    display: block
    margin: 0 auto
    height: 100%
  .icon-desc
    position: absolute
    left: 0
    right: 0 
    bottom: -8px
    text-align: center
    color: #333
    ellipsis()
</style>