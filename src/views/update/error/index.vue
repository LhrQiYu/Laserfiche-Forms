<template>
  <div class="main">
    <el-card>
      <span>Error Message</span>
    </el-card>
    <div class="add-content">
      <el-card class="add-card">
        <div class="baseinfo-container">
          <div class="baseinfo-card">
            <el-form
              style="font-weight: 700"
              :model="ruleForm"
              class="baseinfo-form"
              label-width="140px"
            >
              <el-form-item label="Error Message:">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm.message"
                />
              </el-form-item>
            </el-form>
          </div>
          <el-button
            class="submit-btn"
            size="small"
            type="primary"
            :loading="loading"
            @click="handleSubmit"
            >提交</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Error",
  data: () => ({
    ruleForm: {
      message: "",
    },
    loading: false,
  }),
  methods: {
    async handleSubmit() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.loading = false;
      this.$message({
        message: "提交成功",
        type: "success",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.add-content {
  padding: 20px;
  .add-card {
    height: calc(100vh - 134px);
  }
  .baseinfo-form {
    width: 420px;
  }
}
</style>
