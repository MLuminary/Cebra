<template>
  <func-page :title="title">
    <div class="container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="名称" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="时间" required>
          <el-col :span="15">
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="方式" prop="isPay">
          <el-radio-group v-model="ruleForm.isPay">
            <el-radio label="pay">支出</el-radio>
            <el-radio label="get">收入</el-radio>
          </el-radio-group>
        </el-form-item>
         <el-form-item label="金额" prop="pay">
          <el-input v-model.number="ruleForm.pay"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="info">
          <el-input type="textarea" v-model="ruleForm.info"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </func-page>
</template>

<script>
import FuncPage from 'base/funcPage/funcPage'

export default {
  data () {
    return {
      title: '添加账单',
      ruleForm: {
        title: '',
        info: '',
        pay: 0,
        isPay: '',
        date: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        isPay: [
          { required: true, message: '请选择方式', trigger: 'change' }
        ],
        info: [
          { message: '请填写活动简介', trigger: 'blur' },
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        pay: [
          {required: true, message: '请选择金额', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    FuncPage
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('getItems', this.ruleForm)
          this.$router.back()
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~common/stylus/variable';

  .container
    position relative
    top $HEADER_HEIGHT + 20
    display flex
    justify-content center
    .demo-ruleForm
      width 80%
</style>
