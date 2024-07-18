<template>
  <div class="main">
    <el-card>
      <span style="font-weight: 700; font-size: 18px"
        >LCO Case Registration Form</span
      >
    </el-card>
    <div class="add-content">
      <el-card class="add-card">
        <div class="baseinfo-container">
          <div class="baseinfo-card">
            <el-form
              :model="formData"
              :rules="rules"
              style="font-weight: 700"
              class="baseinfo-form"
              label-width="320px"
            >
              <h2
                style="
                  width: calc(90vw - 20px);
                  margin-bottom: 10px;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                LCO Case Registration Form
              </h2>
              <el-form-item label="workflow email id">
                <el-input size="small" v-model="formData.workflowEmailId" />
              </el-form-item>

              <el-form-item label="Case Number">
                <el-input size="small" v-model="formData.number" />
              </el-form-item>

              <el-form-item label="Case Name" prop="caseName">
                <el-input size="small" v-model="formData.caseName" />
                <!-- <span style="font-weight: 400">Name of the case</span> -->
              </el-form-item>

              <el-form-item label="Trademark Case">
                <el-input size="small" />
              </el-form-item>

              <el-form-item label="Instructing Department">
                <el-input size="small" v-model="formData.department" />
              </el-form-item>

              <el-form-item label="Instructing Department Code">
                <el-input size="small" v-model="formData.departmentCode" />
              </el-form-item>

              <el-form-item label="Self-created Instructing Department?">
                <el-radio-group v-model="formData.radio">
                  <el-radio label="Yes"></el-radio>
                  <el-radio label="No"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="TS_Orgn">
                <el-input size="small" v-model="formData.tsOrgn" />
              </el-form-item>

              <el-form-item label="Dept Code">
                <el-input size="small" v-model="formData.deptCode" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Trademark
              </h2>

              <el-form-item label="Trademark Master Case or Sub Case">
                <el-radio-group v-model="formData.subCase">
                  <el-radio
                    label="Register a new Trademark Master Case"
                  ></el-radio>
                  <el-radio
                    label="Register a new sub-case under a current Trademark Master Case"
                  ></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="Trademark Master Case Number">
                <el-input size="small" v-model="formData.masterCaseNumber" />
              </el-form-item>

              <el-form-item label="Trademark Master Case Name">
                <el-input size="small" v-model="formData.masterCaseName" />
              </el-form-item>

              <el-form-item label="Trademark Sub Case Description">
                <el-input size="small" />
              </el-form-item>

              <el-form-item
                label="Instructing Staff Name"
                prop="instructingName"
              >
                <el-input size="small" v-model="formData.instructingName" />
              </el-form-item>

              <el-form-item
                label="Instructing Staff Email"
                prop="instructingEmail"
              >
                <el-input size="small" v-model="formData.instructingEmail" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Self-created Instructing Department
              </h2>

              <el-form-item
                label="New or Existing Self-created Instructing Department"
              >
                <el-radio-group v-model="formData.selfInstructing">
                  <el-radio
                    label="Create a new Instructing Department"
                  ></el-radio>
                  <el-radio
                    label="Select a self-created Instructing Department"
                  ></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="New Self-created Instructing Department">
                <el-input size="small" />
              </el-form-item>

              <el-form-item
                label="Existing Self-created Instructing Department"
              >
                <el-input size="small" v-model="formData.handingEid" />
              </el-form-item>

              <el-form-item
                label="New Self-created Instructing Department Code"
              >
                <el-input size="small" v-model="formData.handiInstructing" />
              </el-form-item>

              <el-form-item
                label="Existing Self-created Instructing Department Code"
              >
                <el-input size="small" v-model="formData.handingEmailCode" />
              </el-form-item>

              <el-form-item label="LCO Handling Staff" prop="lcoStaff">
                <el-input size="small" v-model="formData.lcoStaff" />
              </el-form-item>

              <el-form-item label="Handling Staff Email">
                <el-input size="small" v-model="formData.handingEmail" />
              </el-form-item>

              <el-form-item label="Handling Staff eid">
                <el-input size="small" v-model="formData.handingEid" />
              </el-form-item>

              <el-form-item label="Descriptions ">
                <el-input
                  v-model="formData.descriptions"
                  size="small"
                  :rows="3"
                  type="textarea"
                  minlength="50"
                  maxlength="200"
                  show-word-limit
                />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Related Case(s)
              </h2>

              <el-form-item label="Related Case Name">
                <el-input size="small" v-model="formData.relatedName" />
              </el-form-item>

              <el-form-item label="Related Case Number">
                <el-input size="small" v-model="formData.relatedNumber" />
              </el-form-item>
              <el-form-item label="Hidden">
                <el-input size="small" v-model="formData.hidden" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Keywords(s)
              </h2>
              <el-form-item label="File Upload:">
                <el-upload
                  class="upload-demo"
                  :limit="3"
                  action=""
                  :auto-upload="false"
                  :file-list="formData.fileList"
                >
                  <el-button size="small" type="primary">Upload</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="Keywords">
                <el-input size="small" v-model="formData.keywords" />
              </el-form-item>

              <el-form-item label="Email Options" prop="emailOptions">
                <el-select
                  v-model="formData.emailOptions"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Hidden Section
              </h2>

              <el-form-item label="LCO Email Testing" prop="caseHidden">
                <el-input size="small" v-model="formData.lcoEmailTesting" />
              </el-form-item>

              <el-form-item
                label="Trademark Master Case Number_Hidden"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.caseNumberHidden" />
              </el-form-item>

              <el-form-item
                label="Trademark Master Case Name_Hidden"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.caseNameHidden" />
              </el-form-item>

              <el-form-item
                label="Existing Self-created Instructing Department_Hidden"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.selfCaseNameHidden" />
              </el-form-item>

              <el-form-item
                label="Existing Self-created Instructing Department Code_Hidden"
                prop="caseHidden"
              >
                <el-input
                  size="small"
                  v-model="formData.createDepartmentHidden"
                />
              </el-form-item>

              <el-form-item
                label="Trademark Master Case Name_Existed1"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.caseExisted1" />
              </el-form-item>

              <el-form-item
                label="Trademark Master Case Name_Existed2"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.caseExisted2" />
              </el-form-item>

              <el-form-item
                label="Trademark Master Case Name_Existed3"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.caseExisted3" />
              </el-form-item>

              <el-form-item
                label="New Self-created Instructing Department_Existed1"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfExisted1" />
              </el-form-item>

              <el-form-item
                label="New Self-created Instructing Department_Existed2"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfExisted2" />
              </el-form-item>

              <el-form-item
                label="New Self-created Instructing Department_Existed3"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfExisted3" />
              </el-form-item>

              <el-form-item
                label="New Self-created Instructing Department Code_Existed1"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfCodeExisted1" />
              </el-form-item>
              <el-form-item
                label="New Self-created Instructing Department Code_Existed2"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfCodeExisted2" />
              </el-form-item>
              <el-form-item
                label="New Self-created Instructing Department Code_Existed3"
                prop="caseHidden"
              >
                <el-input size="small" v-model="formData.newSelfCodeExisted3" />
              </el-form-item>

              <el-form-item label="Case Type_Hidden" prop="caseHidden">
                <el-input size="small" v-model="formData.caseHiddenType" />
              </el-form-item>

              <el-form-item label="Case Type_Display" prop="caseDisplay">
                <el-input size="small" v-model="formData.caseDisplay" />
              </el-form-item>

              <el-form-item label="Instructing Department Type Normal Hidden">
                <el-input size="small" v-model="formData.instructingNormal" />
              </el-form-item>

              <el-form-item
                label="Instructing Department Type SelfCreate Hidden"
              >
                <el-input
                  size="small"
                  v-model="formData.instructingSelfCreate"
                />
              </el-form-item>

              <el-form-item label="Instructing Department Type Check Existed">
                <el-input size="small" v-model="formData.instructingType" />
              </el-form-item>

              <el-form-item label="Self-created Instructing Department">
                <el-checkbox
                  >Register a Case with Self-created Instructing
                  Department</el-checkbox
                >
              </el-form-item>

              <el-form-item>
                <el-button class="submit-btn" size="small" type="primary"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Quill from "../components/Quill";

const courseClassifyListCopy = [
  { id: 1, name: "To be sent by system" },
  { id: 2, name: "To be sent manually" },
  { id: 3, name: "Not required" },
];

const statusList = [
  { id: 1, name: "Active" },
  { id: 2, name: "Dormant" },
  { id: 3, name: "Closed" },
];

export default {
  name: "ProductList",
  components: { Quill },
  data() {
    return {
      courseClassifyListCopy,
      statusList,
      formData: {
        content: "",
        status: null,
        fileList: [],
      },
      rules: {
        caseName: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        caseHidden: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        caseDisplay: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        instructingName: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        instructingEmail: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        lcoStaff: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],
        instructingName: [
          { required: true, message: "值是必需的。", trigger: "blur" },
        ],

        status: [{ required: true, message: "请选择", trigger: "change" }],
        emailOptions: [
          { required: true, message: "请选择", trigger: "change" },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    quillEditorChange(val) {
      console.log("val", val);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  text-align: left !important;
}
.add-content {
  padding: 20px;
  .add-card {
    height: calc(100vh - 134px);
    overflow-y: auto;
  }
  .baseinfo-form {
    width: 720px;
  }
  .quill-conatiner {
    width: calc(90vw - 300px);
    height: 400px;
  }
}
</style>
