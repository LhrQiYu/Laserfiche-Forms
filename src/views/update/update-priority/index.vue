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
              label-width="140px"
            >
              <el-form-item label="File Upload:">
                <el-upload
                  class="upload-demo"
                  :limit="1"
                  accept=".xlsx"
                  action=""
                  :auto-upload="false"
                  :on-exceed="handlExceed"
                  :on-change="handleUploadChange"
                  :on-remove="handleRemove"
                  :file-list="ruleForm.fileList"
                >
                  <el-button size="small" type="primary">Upload</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="Upload by:">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm.name"
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
      fileList: [],
      name: "sysadmin",
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
    handleUploadChange(_, fileList) {
      this.ruleForm.fileList = fileList
    },
    handleRemove(_,fileList) {
      this.ruleForm.fileList = fileList
    },
    handlExceed() {
      this.$message({
        message: "文件超出最大数量",
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
