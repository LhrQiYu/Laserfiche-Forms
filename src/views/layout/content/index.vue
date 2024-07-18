<template>
  <div>
    <!-- <div class="header">
      <div class="open">
        <span
          v-if="!!isCollapse"
          class="iconfont el-icon-s-fold"
          @click="changeMenu"
        ></span>
        <span v-else class="iconfont el-icon-s-fold" @click="changeMenu">
        </span>
      </div>
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Content',
  props: ['isCollapse'],
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    changeMenu() {
      console.log(1111)
      this.$emit('changeShow')
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  height: 50px;
  background: #ffffff;
  // background: pink;
  // color: #fff;
  line-height: 50px;
  .open {
    .iconfont {
      // background: #304156;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
