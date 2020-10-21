<template>
<div class="footer-wrapper">
  <div class='footer-desc'>
    <span class="iconfont">&#xe62b;</span>
    <span style="font-weight:bold">票面价</span>
    <span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
  </div>
    <div class="footer-icon">
      <span class="iconfont">&#xe610;机票</span>
      <span class="iconfont">&#xe89b;酒店</span>
      <span class="iconfont">&#xe662;公寓</span>
      <span class="iconfont">&#xe605;</span>
      <span class="iconfont">更多&#xe666;</span>
    </div>
</div>
</template>

<script>
export default {
    name:'RecommendFooter'
}
</script>
<style lang="stylus" scoped>
.footer-wrapper
  width:100%
  background-color: #eee
  .footer-desc
    padding-top:.3rem
    overflow :hidden
  .footer-icon
    margin-top:.2rem
    padding: .2rem 0
    display:flex
    justify-content :space-evenly
  .footer-icon > .iconfont
    font-size:.4rem
</style>