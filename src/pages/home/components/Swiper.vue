<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        observer: true,
        // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents: true
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length // 开始的时候list为空
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25% // 当图片未加载时，预留空间
  background #eeeeee
  .swiper-img
    width 100%
</style>
