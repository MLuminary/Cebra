<template>
  <el-card class="item box-card">
    <p class="item-title">
      {{items.title}}
    </p>
    <p class="item-info">
      {{items.info}}
    </p>
    <p class="item-pay">
      <span>{{items.isPay === 'pay'?ispay[1]:ispay[0]}}</span>
      <span>{{items.pay}}</span>
    </p>
    <p class="item-bal">
      <span>余额</span>
      <span>{{items.bal}}</span>
    </p>
    <p class="item-date">
      <span>日期</span>
      <span>{{items.date}}</span>
    </p>
  </el-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ispay: ['+￥', '-￥']
    }
  }
}

</script>
<style lang='stylus' scoped>
@import "~common/stylus/variable.styl"

  .item
    width 95%
    margin 0 auto
    margin-bottom 30px
    line-height 2
    .item-title
      color $color-dialog-font
      font-size $font-size-large-x
    .item-info
      color $color-font-d
    .item-pay
      text-align right
    .item-bal
      display flex
      justify-content space-between
    .item-date
      display flex
      justify-content space-between

</style>
