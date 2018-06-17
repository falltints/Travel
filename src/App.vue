<template>
  <div id="app"><!--会替换掉index.html中的id为app的div元素-->
    <keep-alive><!--vue自带的组件-->
      <!--exclude取消缓存 exclude="组件名"-->
      <!--路由被加载一次后，路由中的内容就会被放在内存之中，切换路由不会重新进行渲染，
      也就是说mounted生命周期函数只会执行一次，而activated生命周期函数（keep-alive组件添加）会在每次切换页面时执行-->
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
