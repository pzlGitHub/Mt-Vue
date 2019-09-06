<template>
  <div class="m-header-topbar m-header">
    <!-- 一行24份 span属性设置 -->
      <el-col :span="10">
        <geo />
      </el-col>
      <el-col :span="14">
        <m-nav />
      </el-col>
  </div>
</template>

<script>
import geo from './geo.vue';
import MNav from './nav.vue';

export default {
    components: {
      geo,
      MNav
    }
};
</script>

<style lang="scss">
  @import '@/assets/css/public/header/topbar.scss';
</style>