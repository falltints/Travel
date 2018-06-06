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
        observeParents: true
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
    padding-bottom 31.25%
    background #eeeeee
    .swiper-img
      width 100%
</style>
