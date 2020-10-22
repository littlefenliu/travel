<template>
    <ul class="list">
      <li class="item" 
        v-for="item of letters" 
        :key="item "
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
      cities:Object
    },
    computed:{
      letters() {
        const letters=[]
        for(var i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data(){
      return{
        touchStatus:false,
        startY: 0,
        timer:null
      } 
    },
    // 页面数据更新，完成渲染后updated就会执行
    updated() {
      this.startY=this.$refs["A"][0].offsetTop
    },
    methods:{
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus=true
      },
      handleTouchMove(e){
        // 当状态等于true时才对执行move事件
        if(this.touchStatus){
          // 节流操作
          if(this.timer){
            // 如果有定时器就清除
            clearTimeout(this.timer)
          }
          // 没有就设置
          this.timer=setTimeout(() => {
            const touchY= e.touches[0].clientY-80
            const index=Math.floor((touchY-this.startY)/20)
            if(index >= 0 && index < this.letters.length){
            this.$emit("change",this.letters[index])
            }
          }, 16);
          
        }
      },
      handleTouchEnd(){
        this.touchStatus=false
      }
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variables.styl"
.list 
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0 
    bottom 0
    width .4rem
    color $bgColor
    .item
      margin-top: .1rem
      text-align center
</style>