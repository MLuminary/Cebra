<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      动态
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级动态'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
