<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{ key }}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 1.58rem
  width .4rem
  color $bgColor
  .item
    text-align center
    line-height .4rem
</style>
