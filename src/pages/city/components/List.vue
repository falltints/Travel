<template>
  <div class="list" ref="wrapper">
    <div><!--因为better-scroll只处理第一个子元素的滚动，所以要对以下三个area进行包裹-->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
// 在一个文件或模块中，export、import可以有多个，export default仅有一个
// 通过export方式导出，在导入时要加{ }，export default则不需要
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      // 当任务为异步或者复杂的批量同步操作时，需要调用actions（使用dispatch方法）
      // 当任务较为简单，则可以直接调用mutations（使用commit方法）
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper) // 获取dom元素
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
.border-topbottom::before, .border-topbottom::after, .border-bottom::before
  border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    font-size .26rem
    color #666
    clear both /*同样可以清除浮动*/
  .button-list
    padding .1rem
    /*overflow hidden*/ /*可以用来清除浮动*/
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem .6rem .1rem .1rem
        text-align center
        border .02rem solid #ccc
        padding .1rem 0
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      color #666
      padding-left .2rem
</style>
