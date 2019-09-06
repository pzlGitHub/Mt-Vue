<template>
  <div class="m-istyle">
    <!-- 鼠标移入触发绑定的事件 -->
    <dl @mouseover="over" :class="nav.class">
      <!-- 从父组件获取的数据 -->
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <!-- 卡片模板 去掉鼠标移入时的阴影 -->
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
            <!-- 当rentNum值不为0 同时 有价格数据就展示正常模板 -->
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.price_info.current_price">
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <!-- 当rentNum值为0，展示 抢光了 模板 -->
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <!-- 展示 人均 模板 -->
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                <span class="units">/{{ item.price_info.units }}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      // 数据信息：图片  标题 第二标题 价格 门市价 均值和单位 产品是否卖光 地址
      list: [
        {
          image:
            "//p0.meituan.net/bbia/4476c225f6e072204042288f83e512c353303.jpg@368w_208h_1e_1c",
          title: "储缘蛋糕（沙新路店）",
          sub_title:
            "10英寸欧式水果生日蛋糕7选1-蛋糕店送货上门贴心服务,同城3公里可免费配送到家。1个，约10英寸，圆型",
          price_info: {
            current_price: null,
            old_price: null,
            // 均值和单位
            avg_price: 18,
            units: "人均"
          },
          // 产品是否卖光
          rentNum: true,
          address: "坪山"
        },
        {
          image:
            "//p0.meituan.net/deal/201205/25/_0525164237.jpg@368w_208h_1e_1c",
          title: "一品轩（莲花北店）",
          sub_title: "大四喜蛋糕 （方形蛋糕）1个，约8英寸，方形",
          price_info: {
            current_price: 188,
            old_price: 218,
            // 均值和单位
            avg_price: null,
            units: null
          },
          // 产品是否卖光
          rentNum: false,
          address: "市民中心"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/17d9e7fcc6f4eaddddd58435542fb1303293668.jpg@368w_208h_1e_1c",
          title: "必胜客（中心书城店）",
          sub_title: "A101【海鲜季】轻享2人餐1份",
          price_info: {
            current_price: 159,
            old_price: 229,
            // 均值和单位
            avg_price: null,
            units: null
          },
          // 产品是否卖光
          rentNum: true,
          address: "会展中心"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/cdb0962fb58a19a1c462dc733dd5a6d1664784.jpg@368w_208h_1e_1c",
          title: "四季酒店·馥自助餐厅",
          sub_title: "平日中午自助餐",
          price_info: {
            current_price: 278,
            old_price: 365.8,
            // 均值和单位
            avg_price: null,
            units: null
          },
          // 产品是否卖光
          rentNum: true,
          address: "会展中心"
        },
        {
          image:
            "//p0.meituan.net/wedding/c5ec218510dcb28c788bdbf2af259edb19629.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
          title: "美肌工坊皮肤管理（观澜天虹格澜店）",
          sub_title: "美肌工坊皮肤管理（观澜天虹格澜店）",
          price_info: {
            current_price: null,
            old_price: null,
            // 均值和单位
            avg_price: null,
            units: null
          },
          // 产品是否卖光
          rentNum: true,
          address: "观澜"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/5fdcdbc88ba5885a15d40979fbb7c32e8434901.jpg@368w_208h_1e_1c",
          title: "丽思卡尔顿酒店Paletto意大利餐厅",
          sub_title: "周日自助午餐",
          price_info: {
            current_price: 367,
            old_price: 458,
            // 均值和单位
            avg_price: null,
            units: null
          },
          // 产品是否卖光
          rentNum: true,
          address: "会展中心"
        }
      ]
    };
  },
  // 获取父组件传递的数据
  props: ["nav"],
  methods: {
    over(e) {
      // 可以获取源数据
      console.log(e.target);
      // 当鼠标没有移入dd标签的时候不执行任何的东西
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      // 获取到dom上自定义的属性 用getAttribute()
      this.kind = dom.getAttribute("data-type");

      // 动态获取数据 ajax请求
      // ...
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>