<template>
  <transition name="slide">
    <div class="funcPage">
      <nav-header :title="title"></nav-header>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import NavHeader from 'base/navHeader/navHeader'

export default {
  props: [
    'title'
  ],
  components: {
    NavHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.funcPage {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $color-background;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
