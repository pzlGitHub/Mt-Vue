<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <!-- 输入框 绑定两个事件 focus聚焦 blur失去焦点 -->
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <!-- 搜索按钮 -->
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="item + '_'+ index">
              <!-- 跳转,并拿到params存储的item数据 -->
              <router-link :to="{name: 'goods', params:{name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <!-- 跳转,并拿到params存储的item数据 -->
              <router-link :to="{name: 'goods', params:{name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [
        "深圳欢乐谷",
        "东部华侨城",
        "世界之窗",
        "锦绣中华民俗文化村",
        "欢乐海岸"
      ],
      searchList: ["火锅", "火锅 重庆", "火锅自助餐", "h"],
      suggestList: [
        "深圳欢乐谷",
        "东部华侨城",
        "世界之窗",
        "锦绣中华民俗文化村",
        "深圳野生动物园",
        "大梅沙",
        "欢乐海岸"
      ]
    };
  },
  // 计算属性
  computed: {
    // 聚焦和没内容才展示出来
    isHotPlace: function() {
      return !this.searchWord && this.isFocus;
    },
    isSearchList: function() {
      return this.searchWord && this.isFocus;
    }
  },
  // 方法
  methods: {
    focus() {
      console.log("aa");
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>