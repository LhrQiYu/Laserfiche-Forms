<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="logo-container">
        <img :src="require('@/assets/ricoh.svg')" alt="" />
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#323c4c"
        text-color="#fff"
        active-text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <el-submenu index="/product">
          <template slot="title">
            <i class="el-icon-news"></i>
            <span slot="title">Draft</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/product/list">
              <i class="el-icon-chat-line-round"></i>
              <span slot="title">Draft acknowledgement email</span>
            </el-menu-item>
            <el-menu-item index="/product/category">
              <i class="el-icon-open"></i>
              <span slot="title">Draft completion email preview</span>
            </el-menu-item>
            <el-menu-item index="/product/case">
              <i class="el-icon-document-add"></i>
              <span slot="title">EO Update Case Status</span>
            </el-menu-item>

            <el-menu-item index="/product/registration">
              <i class="el-icon-toilet-paper"></i>
              <span slot="title">LCO Case Registration Form</span>
            </el-menu-item>
            <el-menu-item index="/product/registrationForm">
              <i class="el-icon-refresh-right"></i>
              <span slot="title">Review Registration Form</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/update">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span slot="title">Update Priority</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/update/error">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">Error Message</span>
            </el-menu-item>
            <el-menu-item index="/update/update-priority">
              <i class="el-icon-message"></i>
              <span slot="title">Priority List</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/cover-sheets">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span slot="title">Cover Sheets</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/cover-sheets/lco-case">
              <i class="el-icon-s-flag"></i>
              <span slot="title">LCO Case Filing</span>
            </el-menu-item>
            <el-menu-item index="/cover-sheets/lf-test">
              <i class="el-icon-s-flag"></i>
              <span slot="title">Lf Test</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["isCollapse"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
  .el-scrollbar__view {
    height: 100%;
  }
}
.el-menu {
  border-right: 0;
  /deep/ .is-active {
    background: #28303d !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  // min-height: 400px;
}
::v-deep .el-menu-item-group__title {
  padding: 0;
}
.logo-container {
  margin: 20px 0;
  text-align: center;
}
</style>
