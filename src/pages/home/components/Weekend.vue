<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: './static/images/weekend-1.jpg',
        title: '恭王府',
        desc: '一起去看看和珅家'
      }, {
        id: '002',
        imgUrl: './static/images/weekend-2.jpg',
        title: '颐和园',
        desc: '保存完整的一座皇家行宫御苑'
      }, {
        id: '003',
        imgUrl: './static/images/weekend-3.jpg',
        title: '故宫',
        desc: '东方宫殿典型代表'
      }, {
        id: '004',
        imgUrl: './static/images/weekend-4.jpg',
        title: '八达岭',
        desc: '不到长城非好汉'
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
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    font-size .32rem
    line-height .54rem
    ellipse()
  .item-desc
    line-height .4rem
    color #ccc
    ellipse()
</style>
