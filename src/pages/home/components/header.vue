<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632; </span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{ this.city }}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 将state中city对应内容映射到city计算属性上
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.header
  line-height $headerHeight /*html设置了font-size: 50px (1rem = 50px, 所以1px = 0.02rem)*/
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
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    color #ffffff
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
