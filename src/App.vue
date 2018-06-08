<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!--exclude取消缓存--><!--路由被加载一次后，路由中的内容就会被放在内存之中，切换路由不会重新进行渲染-->
      <router-view/><!--router-view显示当前路由地址对应的内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
