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
              label-width="140px"
            >
              <el-form-item label="Type" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="Coversheet" />
                  <el-checkbox label="Box Label" />
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="Case Name:" prop="caseName">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm.caseName"
                />
              </el-form-item>
              <el-form-item label="Case Number:" prop="caseNumber">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm.caseNumber"
                />
              </el-form-item>
              <el-form-item label="LCO Handling Staff:">
                <el-input
                  size="small"
                  maxlength="50"
                  placeholder="请输入"
                  auto-complete="off"
                  v-model="ruleForm.lcoDesc"
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
      type: [],
      caseName: "",
      caseNumber: "",
      lcoDesc: "",
    },
    rules: {
      type: [
        {
          required: true,
          message: "值是必需的",
          trigger: "change",
        },
      ],
      caseName: [{ required: true, message: "值是必需的", trigger: "change" }],
      caseNumber: [
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
        
          const tag = await $http({
            data: this.ruleForm,
            packageName: "Workflow 1",
          });
          console.log(tag);
          this.loading = true;
          await new Promise((resolve) => setTimeout(resolve, 1500))
          this.loading = false;
          this.$message({
            message: "提交成功",
            type: "success",
          });
          // window.location.reload();
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
