<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      <!-- vuex 动态获取地址 -->
      {{$store.state.position}}
      <!-- 跳转标签 -->
      <router-link class="changeCity" :to="{name: 'changeCity'}">
          切换城市
      </router-link>
      [
      <a href="#" class="username">东方</a>
      <a href="#" class="username">基隆</a>
      <a href="#" class="username">嘉义市</a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
