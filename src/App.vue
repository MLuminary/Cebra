<!-- 主文件 -->
<template>
  <div class="app">
    <Header/>
    <palette/>
    <router-view class="view"></router-view>
    <tab/>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
import Header from 'components/header/header'
import Palette from 'components/palette/palette'

export default {
  name: 'App',
  components: {
    Tab,
    Header,
    Palette
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.app {
  display: flex;
  justify-content: center;

  .view {
    position: absolute;
    top: $HEADER_HEIGHT;
    left: 0;
    right: 0;
    bottom: $TAB_HEIGHT;
    overflow: hidden;
  }
}
</style>
