<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      投票
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级投票'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
