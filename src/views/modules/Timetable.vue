<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      课表
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级课表'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
