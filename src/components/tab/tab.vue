<template>
  <div class="tab">
    <router-link class="tab-item" to="/class">
      <i class="tab-icon iconfont icon-study"></i>
      <span>班级</span>
    </router-link>
    <router-link class="tab-item" to="/square">
      <i class="tab-icon iconfont icon-bubble"></i>
      <span>广场</span>
    </router-link>
    <router-link class="tab-item" to="/personal">
      <i class="tab-icon iconfont icon-user"></i>
      <span>我</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';
@import '~common/stylus/icon';

.tab {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: $TAB_HEIGHT;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-decoration: none;
    height: 100%;
    flex-direction: column;

    .tab-icon {
      font-size: $font-size-large-x;
      color: $color-font-d;
      margin-top: 5px;
      transition: all 0.2s;
    }

    span {
      color: $color-font-d;
      font-size: $font-size-medium;
      user-select: none;
      transition: all 0.2s;
    }

    &.router-link-active {
      .tab-icon {
        color: $color-dialog-font;
      }
      span {
        color: $color-dialog-font;
      }
    }
  }
}
</style>
