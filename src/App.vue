<!-- 主文件 -->
<template>
  <div>
    <Header/>
    <router-view class="view"></router-view>
    <tab/>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
import Header from 'components/header/header'

export default {
  name: 'App',
  components: {
    Tab,
    Header
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.view {
  position: absolute;
  top: $HEADER_HEIGHT;
  left: 0;
  right: 0;
  bottom: $TAB_HEIGHT;
  overflow: hidden;
}
</style>
