<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632; </span>输入城市/景点/游玩主题</div>
    <div class="header-right">{{ this.city }}<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.header
  line-height .86rem /*html设置了font-size: 50px (1rem = 50px, 所以1px = 0.02rem)*/
  display flex
  background $bgColor
  color #ffffff
  .header-left
    width .64rem
    float left
    .back-icon
      display block
      text-align center
      font-size .4rem
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      font-size .24rem
      padding-left .05rem
  .header-input
    flex 1
    background #ffffff
    border-radius .1rem
    height .64rem
    margin-left .2rem
    margin-top .12rem
    padding-left .2rem
    color #cccccc
    line-height .64rem
</style>
