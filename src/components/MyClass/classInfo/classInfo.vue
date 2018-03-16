<template>
  <div>
    <!-- <el-card class="box-card"> -->
      <div class="class-info">
        <p class="class-name">{{ className }}</p>
        <p class="class-summary">{{ grade }} 级 / {{ personNum }} 人</p>
      </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      className: '网络软件工程 2 班',
      grade: '2015',
      personNum: 42
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.class-info {
  margin: 10px 0 20px;
  padding: 0 10px;

  .class-name {
    color: $color-dialog-font;
    font-size: $font-size-large-x;
    margin: 10px 0 10px;
  }

  .class-summary {
    color: $color-font-d;
    margin: 5px 0;
  }
}
</style>
