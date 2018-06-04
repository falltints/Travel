<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: './static/images/recommend-1.jpg',
        title: '青城山',
        desc: '青城山下白素贞，洞中千年修此身'
      }, {
        id: '002',
        imgUrl: './static/images/recommend-2.jpg',
        title: '乐山大佛',
        desc: '摩崖石刻雕像'
      }, {
        id: '003',
        imgUrl: './static/images/recommend-3.jpg',
        title: '九寨沟',
        desc: '传说中的童话天堂，你还在犹豫吗'
      }, {
        id: '004',
        imgUrl: './static/images/recommend-4.jpg',
        title: '峨眉山',
        desc: '云上金顶，天下峨眉'
      }]
    }
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
  .item-button
    margin-top .16rem
    color #fff
    background #ff9300
    padding 0 .2rem
    border-radius .06rem
    line-height .44rem
</style>
