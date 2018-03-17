<!-- 开销 -->
<template>
  <func-page :title="title">
    <div class="spending">
      <router-link class="add-item" to="spending/additem"><i class="el-icon-circle-plus"></i></router-link>
      <ClsMoney :totalMoney="totalMoney">
      </ClsMoney>
      <Item
        :items="items"
        v-for="(items,index) in itemMsg"
        :key="index"
      >
      </Item>
      <router-view @getItems="getItem"></router-view>
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'
import ClsMoney from 'components/Spending/clsMoney'
import Item from 'components/Spending/spendItem'
import addItem from 'components/Spending/addItem'

export default {
  data () {
    return {
      title: '班级开销',
      totalMoney: 3350,
      itemMsg: [
        {
          'title': '班级聚餐',
          'info': '网络工程二班和软件工程二班在新世纪大酒店聚餐',
          'pay': 650,
          'isPay': 'pay',
          'date': '2018-03-15',
          'bal': 3350
        },
        {
          'title': '班级打工',
          'info': '网络工程二班和软件工程二班在北京打工1天',
          'pay': 4000,
          'isPay': 'get',
          'date': '2018-03-14',
          'bal': 4000
        }
      ]
    }
  },
  components: {
    FuncPage,
    ClsMoney,
    Item,
    addItem
  },
  methods: {
    getItem (item) {
      this.totalMoney = item.isPay === 'pay' ? this.totalMoney - item.pay : this.totalMoney + item.pay
      item.bal = this.totalMoney
      this.itemMsg.unshift(item)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'

  .spending
    position absolute
    padding-top $HEADER_HEIGHT
    box-sizing border-box
    overflow-y scroll
    height 100%
    top 0
    .add-item
      position fixed
      right 40px
      bottom 50px
      color $color-font
      font-size 40px
</style>
