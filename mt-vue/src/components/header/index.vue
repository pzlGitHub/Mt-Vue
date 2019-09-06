<template>
  <!-- 首尾展示不便中间变动的框架 -->
  <div class="m-header">
    <!-- 一列 -->
    <el-row>
        <top-bar />
    </el-row>
    <el-row>
        <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
    components: {
        topBar,
        searchBar
    }
};
</script>

<style lang="scss" scoped>
  @import '@/assets/css/public/header/index.scss';
</style>