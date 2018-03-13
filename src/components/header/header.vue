<template>
  <div class="header">
    <img class="cebra-logo" src="./logo.png">
    <span class="cebra-name">Cebra</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.header {
  height: $HEADER_HEIGHT;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: 'Efesto';
    src: url('Efesto-Regular.ttf');
  }

  .cebra-name {
    font-size: 28px;
    font-weight: bold;
    font-family: 'Efesto';
    color: $color-highlight-font
  }

  .cebra-logo {
    height: 70%;
    margin-right: 5px;
  }
}
</style>
