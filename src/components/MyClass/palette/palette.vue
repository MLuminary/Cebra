<!-- 功能栏模块 -->
<template>
  <el-card :body-style="bodyStyle">
    <div class="palette">
      <router-link class="pal-item spending" to="/class/spending">
        <img src="./spending.png">
        <span>开销</span>
      </router-link>
      <router-link class="pal-item timetable" to="/class/timetable">
        <img src="./timetable.png">
        <span>课表</span>
      </router-link>
      <router-link class="pal-item tyfon" to="/class/tyfon">
        <img src="./tyfon.png">
        <span>喇叭</span>
      </router-link>
      <router-link class="pal-item ipa" to="/class/ipa">
        <img src="./ipa.png">
        <span>通讯录</span>
      </router-link>
      <router-link class="pal-item trends" to="/class/trends">
        <img src="./trends.png">
        <span>动态</span>
      </router-link>
      <router-link class="pal-item vote" to="/class/vote">
        <img src="./vote.png">
        <span>投票</span>
      </router-link>
      <router-link class="pal-item material" to="/class/material">
        <img src="./material.png">
        <span>资料</span>
      </router-link>
      <router-link class="pal-item schedule" to="/class/schedule">
        <img src="./schedule.png">
        <span>日程</span>
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
// @import '~common/stylus/icon';
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
    flex-direction: column;
    user-select: none;

    span {
      color: $color-font-d;
      font-size: $font-size-medium;
    }

    img {
      width: 35%;
      margin-bottom: 10px;
    }
  }
}
</style>
