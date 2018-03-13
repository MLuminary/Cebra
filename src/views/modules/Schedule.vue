<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      日程
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级日程'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
