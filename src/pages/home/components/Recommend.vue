<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/mixin.styl"
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  overflow: hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      font-size .32rem
      line-height .54rem
      ellipse()
    .item-desc
      line-height .4rem
      color #ccc
      ellipse()
    .item-button // button是inline-block元素 注：块级元素和inline-block元素或者内联元素不能在一行显示
      margin-top .16rem
      color #fff
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      line-height .44rem
</style>
