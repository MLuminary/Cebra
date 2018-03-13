<!-- 功能栏模块 -->
<template>
  <div class="palette">
    <router-link class="pal-item spending" to="/class/spending">
      <span>开销</span>
    </router-link>
    <router-link class="pal-item vote" to="/class/vote">
      <span>投票</span>
    </router-link>
    <router-link class="pal-item material" to="/class/material">
      <span>资料</span>
    </router-link>
    <router-link class="pal-item schedule" to="/class/schedule">
      <span>日程</span>
    </router-link>
    <router-link class="pal-item trends" to="/class/trends">
      <span>动态</span>
    </router-link>
    <router-link class="pal-item timetable" to="/class/timetable">
      <span>课表</span>
    </router-link>
    <router-link class="pal-item tyfon" to="/class/tyfon">
      <span>喇叭</span>
    </router-link>
    <router-link class="pal-item ipa" to="/class/ipa">
      <span>通讯录</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~common/stylus/icon'
@import '~common/stylus/variable'

.palette {
  display : flex;
  position : absolute;
  1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  top : $PALETTE_TOP;
  height $PALETTE_HEIGHT
  flex-wrap : wrap;
  width 92%
  justify-content center
  border-radius 5px

  .pal-item {
    display flex
    text-decoration none
    width 25%
    justify-content center
    align-items center
  }

  span {
    color $color-font-d
    font-size $font-size-medium
  }

}
</style>
