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
              ref="ruleForm"
              class="baseinfo-form"
              label-width="140px"
            >
              <el-form-item label="Error Message:" prop="Error Message">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['Error Message']"
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
import { $http } from "@/http";
export default {
  name: "Error",
  data: () => ({
    ruleForm: {
      "Error Message": "",
    },
    loading: false,
  }),
  methods: {
    async handleSubmit() {
      const { status, ok } = await $http({
        data: this.ruleForm,
        packageName: "Workflow 1",
      });
      this.loading = true;
      if (ok) {
        this.loading = false;
        this.$message({
          message: `提交成功，状态码：${status}`,
          type: "success",
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.$refs["ruleForm"].resetFields();
        return;
      }
      this.$message({
        message: `提交失败，请求接口异常,状态码：${status}`,
        type: "error",
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
