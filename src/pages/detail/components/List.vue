<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <!--递归组件-->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.item-title
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .36rem
    height .36rem
    background $littleIcons 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem // 把原图按比例缩成目标大小
.item-children
  padding 0 .2rem
</style>
