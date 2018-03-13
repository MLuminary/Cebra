<template>
  <div>
    <router-view class="view"></router-view>
    <tab/>
  </div>
</template>

<script>
import Tab from 'components/tab'

export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.view {
  position absolute
  top 0
  left 0
  right 0
  bottom $TAB_HEIGHT
  overflow hidden
}
</style>
