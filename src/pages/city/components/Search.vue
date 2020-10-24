<template>
<div>
    <div class="search">
        <input 
            v-model="keyword" 
            class="searchinput" 
            type="text" 
            placeholder="输入城市名或拼音">
    </div>
    <div 
        class="search-content" 
        ref="search"
        v-show="keyword">
        <ul>
            <li class="search-item" 
                v-for="item of list" 
                :key="item.id"
                @click="handleCityClick(item.name)">
                {{item.name}}
            </li>
            <!-- 优化3：当list长度为0时才显示提示 -->
            <li 
                class="search-item" 
                v-show="hasNoData">
                没有找到匹配数据，请重新输入！
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data() {
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    computed:{
        // 优化5：判断列表有没有数据，避免在模板里判断
        hasNoData(){
            return !this.list.length
        }
    },
    watch:{
        // 优化1： 节流函数
        keyword (){
            if(this.timer){
                clearTimeout(this.timer)
            }
           // 优化2：没有关键词时清除列表 
            if(!this.keyword){
                this.list=[]
                return 
            }
            this.timer=setTimeout(() => {
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach(value => {
                        // 拼音查询或者字母查询
                        if(value.spell.indexOf(this.keyword)> -1 || 
                           value.name.indexOf(this.keyword)>-1){
                               result.push(value)
                           }
                    });
                    this.list=result
                }
            }, 100);
        }
    },
    mounted(){
        // 优化4：给列表加滚动
        this.scroll=new Bscroll(this.$refs.search)
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variables.styl"
.search
    padding: 0 .1rem
    height: .72rem
    background-color: $bgColor
  .searchinput
    height: .62rem
    line-height :.62rem 
    text-align: center
    width: 100%
    border-radius: .06rem
    color: #666
.search-content
    overflow hidden
    position absolute
    top 1.6rem
    left 0
    right 0
    bottom 0
    background-color #eee
    z-index 1
  .search-item
   line-height .62rem
   padding-left .2rem
   background-color #fff
   color #666
    
</style>