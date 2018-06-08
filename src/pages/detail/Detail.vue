<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      /* axios.get('/api/detail.json?id=' + this.$route.params.id) */
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style type="text/stylus" lang="stylus" scoped>
.content
  height 50rem
</style>
