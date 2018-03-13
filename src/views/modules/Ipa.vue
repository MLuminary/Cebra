<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      通讯录
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级通讯录'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
