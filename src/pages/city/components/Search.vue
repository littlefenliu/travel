<template>
    <div class="search">
        <input class="searchinput" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:"CitySearch"
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
</style>