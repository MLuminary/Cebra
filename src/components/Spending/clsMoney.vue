<template>
  <div class="clsMoney">
    <p class="moneyInfo">班费余额(元)</p>
    <p class="totalMoney">{{totalMoney}}</p>
  </div>
</template>

<script>
export default {
  props: ['totalMoney'],
  data () {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';

.clsMoney
  text-indent 2em
  height 9.375rem
  line-height 2
  padding-top 30px
  .moneyInfo
    color $color-font-d
    font-size $font-size-medium
  .totalMoney
    color $color-dialog-font
    font-size $font-size-large-money
</style>
