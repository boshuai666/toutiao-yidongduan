<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-view />
    <i class="toutiao toutiao-shipin"></i>

    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
//
export default {
  name: 'App' // 可以在调试工具中找到这个组件,组件缓存需要组件name
}
</script>

<style scoped lang="less"></style>
