<template>
  <div class="layout">
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="content" :class="{ small: isCollapse }">
      <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
    </div>
  </div>
</template>
<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'

export default {
  name: 'Layout',
  components: {
    Menu,
    Content,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  mounted() {},
  methods: {
    changeShow() {
      console.log(2222)
      this.isCollapse = !this.isCollapse
    },
  },
}
</script>
<style lang="less" scoped>
.layout {
  .menu {
    width: 300px;
    background: #323c4c;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    box-shadow: 0px 0px 10px -3px;
  }
  .content {
    margin-left: 100px;
    padding-left: 200px;
  }
  .small {
    padding-left: 64px;
  }
}
</style>
