<!-- 开销 -->
<template>
  <func-page :title="title">
    <div>
      资料
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '班级资料'
    }
  },
  components: {
    FuncPage
  }
}
</script>
<style scoped>

</style>
