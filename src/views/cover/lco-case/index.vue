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
              :rules="rules"
              ref="ruleForm"
              class="baseinfo-form"
              label-position="left"
              label-width="170px"
            >
              <el-form-item label="Type" prop="Type">
                <el-checkbox-group v-model="ruleForm.Type">
                  <el-checkbox label="Coversheet" />
                  <el-checkbox label="Box Label" />
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="Case Name:" prop="Case Name">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['Case Name']"
                />
              </el-form-item>
              <el-form-item label="Case Number:" prop="Case Number">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['Case Number']"
                />
              </el-form-item>
              <el-form-item label="LCO Handling Staff:" prop="LCO Handling Staff">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm['LCO Handling Staff']"
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
  name: "UpdatePriority",
  data: () => ({
    ruleForm: {
      Type: [],
      "Case Name": "",
      "Case Number": "",
      "LCO Handling Staff": "",
    },
    rules: {
      Type: [
        {
          required: true,
          message: "值是必需的",
          trigger: "change",
        },
      ],
      "Case Name": [
        { required: true, message: "值是必需的", trigger: "change" },
      ],
      "Case Number": [
        { required: true, message: "值是必需的", trigger: "change" },
      ],
    },
    loading: false,
  }),
  async created() {},
  methods: {
    handleSubmit() {
      this.$refs["ruleForm"].validate(async (valid) => {
        if (valid) {
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
        }
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

.el-checkbox-group {
  display: flex;
  flex-flow: column;
}
</style>
