<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: './static/images/icons-1.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: './static/images/icons-2.png',
        desc: '滑雪季'
      }, {
        id: '003',
        imgUrl: './static/images/icons-3.png',
        desc: '泡温泉'
      }, {
        id: '004',
        imgUrl: './static/images/icons-4.png',
        desc: '动植园'
      }, {
        id: '005',
        imgUrl: './static/images/icons-1.png',
        desc: '景点门票'
      }, {
        id: '006',
        imgUrl: './static/images/icons-2.png',
        desc: '滑雪季'
      }, {
        id: '007',
        imgUrl: './static/images/icons-3.png',
        desc: '泡温泉'
      }, {
        id: '008',
        imgUrl: './static/images/icons-4.png',
        desc: '动植园'
      }, {
        id: '009',
        imgUrl: './static/images/icons-5.png',
        desc: '一日游'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.icons >>> .swiper-container
  width: 100%
  height: 0
  padding-bottom: 50% /*指的是父级元素宽度的50%*/
.icon
  position: relative
  width: 25%
  float: left
  padding-bottom: 25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    overflow: hidden
    box-sizing: border-box /*此时盒子模型的宽度等于 width + border + padding*/
    padding: .1rem
    .icon-img-content
      display: block
      height: 100%
      margin: 0 auto
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .44rem
    height: .44rem
    color: $darkTextColor
    text-align: center
    ellipsis()
</style>
