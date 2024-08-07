<template>
  <div class="main">
    <el-card>
      <span>Update priority List</span>
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
              label-position="left"
              label-width="170px"
            >
              <el-form-item label="Case Number:" prop="caseNumber">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['caseNumber']"
                />
              </el-form-item>
              <el-form-item label="Case Name:" prop="caseName">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['caseName']"
                />
              </el-form-item>
              <el-form-item
                label="instructingDepartment:"
                prop="instructingDepartment"
              >
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['instructingDepartment']"
                />
              </el-form-item>
              <el-form-item
                label="instructingStaffName:"
                prop="instructingStaffName"
              >
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['instructingStaffName']"
                />
              </el-form-item>
              <el-form-item
                label="instructingStaffEmail:"
                prop="instructingStaffEmail"
              >
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['instructingStaffEmail']"
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
``;
export default {
  name: "UpdatePriority",
  data: () => ({
    ruleForm: {
      caseNumber: "",
      caseName: "",
      instructingDepartment: "",
      instructingStaffName: "",
      instructingStaffEmail: "",
    },
    loading: false,
  }),
  methods: {
    async handleSubmit() {
      const { status, ok } = await $http({
        data: this.ruleForm,
        packageName: "WorkflowDemo1",
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
    display: grid;
    place-items: center;
    height: calc(100vh - 134px);
  }

  .baseinfo-form {
    width: 420px;
  }
}

.el-checkbox-group {
  display: flex;
  flex-flow: column;
}
</style>
