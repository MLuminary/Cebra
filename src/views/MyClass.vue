<!-- 我的班级 -->
<template>
  <div class="myclass">
    <router-view class="view"></router-view>
    <palette/>
  </div>
</template>

<script>
import Palette from 'components/palette/palette'

export default {
  components: {
    Palette
  }
}
</script>

<style lang="stylus" scoped>
.myclass {
  display flex
  justify-content center
}
.view {
  position: absolute;
  top: $HEADER_HEIGHT;
  left: 0;
  right: 0;
  bottom: $TAB_HEIGHT;
  overflow: hidden;
}
</style>
