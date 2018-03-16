<template>
  <div class="nav-header">
    <el-button class="back-btn" type="text" @click="back"><i class="iconfont icon--fanhui"></i></el-button>
    <span class="nav-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.nav-header {
  height: $HEADER_HEIGHT;
  text-align: center;
  z-index: 100;
  box-shadow: $box-shadow-value

  .back-btn {
    position: absolute;
    width: 50px;
    left: 0px;
    color: $color-font;
    font-weight: bold;
  }

  .nav-title {
    color: $color-font;
    font-size: $font-size-large;
    line-height: $HEADER_HEIGHT;
    // font-weight bold
  }
}
</style>
