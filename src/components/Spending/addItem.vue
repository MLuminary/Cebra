<template>
  <func-page :title="title">
    <div class="container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="时间" required>
          <el-col :span="13">
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="方式" prop="way">
          <el-radio-group v-model="ruleForm.way">
            <el-radio label="支出"></el-radio>
            <el-radio label="收入"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="简介" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
        name: '',
        date: '',
        way: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        way: [
          { required: true, message: '请选择方式', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动简介', trigger: 'blur' }
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
          alert('submit!')
        } else {
          console.log('error submit!!')
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
