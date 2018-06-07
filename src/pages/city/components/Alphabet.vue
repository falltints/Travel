<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{ item }}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i) // i是对象的键
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 当前触摸点相对于当前可视区域（窗口）的偏移量
          const index = Math.floor((touchY - this.startY) / 20) // 每个字母项的高度为20px
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // offsetTop是当前元素距离已定位父元素的偏移量
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.list
  display flex
  flex-direction column /*使列表项垂直排列*/
  justify-content center
  position absolute
  right 0
  bottom 0
  top 1.58rem
  width .4rem
  color $bgColor
  .item
    text-align center
    line-height .4rem
</style>
