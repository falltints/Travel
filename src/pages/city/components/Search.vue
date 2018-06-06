<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.search
  height .72rem
  background $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    height .6rem
    line-height .6rem
    width 100%
    text-align center
    border-radius .06rem
    color #666
    padding 0 .1rem
</style>
