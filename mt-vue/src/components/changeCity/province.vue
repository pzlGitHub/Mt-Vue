<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索</span>
    <!-- filterable过滤 remote远程搜索 remote-method获取数据 loading是否获取成功标志位 -->
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
export default {
  data() {
    // 省份的下拉框内容  标题  城市的下拉框内容  标题  下拉框只能展示一个的判断条件 搜索框的下拉框内容
    // 关键字
    return {
      provinceList: ["山东", "甘肃", "江苏", "北京", "云南", "海南"],
      province: "省份",
      cityList: ["巨野", "曹县", "郓城", "梁山", "微山"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["巨野", "曹县", "郓城", "梁山", "微山"],
      searchWord: "",
      loading: false
    };
  },
  components: {
    MSelect
  },
  methods: {
    // 让下拉框只能展示一个
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value) {
        this.province = value;
    },
    changeCity (value) {
        this.city = value;
    },
    remoteMethod(val) {
      // 搜索框内输入的值  拿到发给后端，后端传入相对应的数据展示出来就行
      // console.log(val);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>