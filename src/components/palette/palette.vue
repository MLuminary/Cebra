<!-- 功能栏模块 -->
<template>
  <el-card :body-style="bodyStyle">
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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      bodyStyle: { padding: '0px', width: '100%', height: '100%' }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/icon';
@import '~common/stylus/variable';

.palette {
  display: flex;
  height: $PALETTE_HEIGHT;
  flex-wrap: wrap;

  .pal-item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 25%;
  }

  span {
    color: $color-font-d;
    font-size: $font-size-medium;
  }
}
</style>
