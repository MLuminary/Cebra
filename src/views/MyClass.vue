<!-- 我的班级 -->
<template>
  <div class="myclass">
    <class-info></class-info>
    <router-view class="view"></router-view>
    <palette/>
  </div>
</template>

<script>
import Palette from 'components/MyClass/palette/palette'
import ClassInfo from 'components/MyClass/classInfo/classInfo'

export default {
  components: {
    Palette,
    ClassInfo
  }
}
</script>

<style lang="stylus" scoped>
.myclass {
  padding: 4%;
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
