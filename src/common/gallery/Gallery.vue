<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of images" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style type="text/stylus" lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit // 默认是overflow: hidden (这样pagination会看不到)
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000000
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #ffffff
      bottom -1rem // swiper-pagination是绝对定位
</style>
