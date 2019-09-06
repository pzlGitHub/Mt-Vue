<template>
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- vuex数据共享 获取城市信息 -->
      <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
      <!-- 从路由上获取搜索框内的信息 -->
      <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
