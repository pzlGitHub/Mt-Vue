<template>
  <div class="m-youhui">
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
            <!-- 当rentNum值true 同时 有价格数据就展示正常模板  美团价 -->
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">美团价¥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">已售{{ item.address }}</span>
            </div>
            <!-- 当rentNum值为false 展示 门市价 模板 -->
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">已售{{ item.address }}{{ item.units }}</span>
            </div>
            <!-- 展示 抢光了 模板 -->
            <div class="price-info" v-else-if="!item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">已售{{ item.address }}{{ item.units }}</span>
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
      // 数据信息：图片  标题 第二标题 价格 门市价/美团价  展示（门市价/美团价） 销售额  单位
      list: [
        {
          image:
            "//p1.meituan.net/deal/7d31339728d0356f465ab49e1d894fd2115666.jpg@0_0_2484_1863a|388h_640w_2e_90Q|213w_120h_1e_1c",
          title: "蓝劳瑞烘焙工作室",
          sub_title: "[龙华]100元代金券1张",
          price_info: {
            current_price: 1,
            old_price: 100
          },
          // 美团价为真门市价为假
          rentNum: true,
          address: 136,
          units: null
        },
        {
          image:
            "//p1.meituan.net/deal/201208/22/1_0822151022.jpg@213w_120h_1e_1c",
          title: "纵横时光道国际影城",
          sub_title: "哪吒之魔童降世",
          price_info: {
            current_price: 29.9,
            old_price: 180
          },
          // 美团价为真门市价为假
          rentNum: false,
          address: 47.3,
          units: "万"
        },
        {
          image:
            "//p0.meituan.net/deal/45a3a744ee85d3d553b3b774d4424bec51897.jpg@0_0_640_387a|388h_640w_2e_100Q|213w_120h_1e_1c",
          title: "小肥羊",
          sub_title: "[145店通用]30元代金券1张，全场通用",
          price_info: {
            current_price: 0,
            old_price: 0
          },
          // 产品是否卖光
          rentNum: true,
          address: 9802,
          units: null
        },
        {
          image:
            "//p0.meituan.net/deal/d7995a213f7b21bc7a5e2cf760a5a14187630.jpg@0_62_852_516a|388h_640w_2e_90Q|213w_120h_1e_1c",
          title: "芝樱日本料理",
          sub_title: "[南山中心区]沙拉9选1，包间免费",
          price_info: {
            current_price: 1,
            old_price: 50
          },
          // 产品是否卖光
          rentNum: true,
          address: 189,
          units: null
        },
        {
          image:
            "//p1.meituan.net/deal/44d2ba2063dd11cc7b7da6704855507b42750.jpg@0_6_640_387a|388h_640w_2e_100q|213w_120h_1e_1c",
          title: "贵州苗王",
          sub_title: "[民治]鲜美江团鱼首斤劲爆抢购1斤",
          price_info: {
            current_price: 1,
            old_price: 50
          },
          // 产品是否卖光
          rentNum: true,
          address: "观澜",
          units: 613
        },
        {
          image:
            "//p1.meituan.net/deal/7d31339728d0356f465ab49e1d894fd2115666.jpg@0_0_2484_1863a|388h_640w_2e_90Q|213w_120h_1e_1c",
          title: "蓝劳瑞烘焙工作室",
          sub_title: "[龙华]100元代金券1张",
          price_info: {
            current_price: 1,
            old_price: 100
          },
          // 美团价为真门市价为假
          rentNum: true,
          address: 136,
          units: null
        },
        {
          image:
            "//p1.meituan.net/deal/201208/22/1_0822151022.jpg@213w_120h_1e_1c",
          title: "纵横时光道国际影城",
          sub_title: "哪吒之魔童降世",
          price_info: {
            current_price: 29.9,
            old_price: 180
          },
          // 美团价为真门市价为假
          rentNum: false,
          address: 47.3,
          units: "万"
        },
        {
          image:
            "//p0.meituan.net/deal/45a3a744ee85d3d553b3b774d4424bec51897.jpg@0_0_640_387a|388h_640w_2e_100Q|213w_120h_1e_1c",
          title: "小肥羊",
          sub_title: "[145店通用]30元代金券1张，全场通用",
          price_info: {
            current_price: 0,
            old_price: 0
          },
          // 产品是否卖光
          rentNum: true,
          address: 9802,
          units: null
        },
        {
          image:
            "//p0.meituan.net/deal/d7995a213f7b21bc7a5e2cf760a5a14187630.jpg@0_62_852_516a|388h_640w_2e_90Q|213w_120h_1e_1c",
          title: "芝樱日本料理",
          sub_title: "[南山中心区]沙拉9选1，包间免费",
          price_info: {
            current_price: 1,
            old_price: 50
          },
          // 产品是否卖光
          rentNum: true,
          address: 189,
          units: null
        },
        {
          image:
            "//p1.meituan.net/deal/44d2ba2063dd11cc7b7da6704855507b42750.jpg@0_6_640_387a|388h_640w_2e_100q|213w_120h_1e_1c",
          title: "贵州苗王",
          sub_title: "[民治]鲜美江团鱼首斤劲爆抢购1斤",
          price_info: {
            current_price: 1,
            old_price: 50
          },
          // 产品是否卖光
          rentNum: true,
          address: "观澜",
          units: 613
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
@import "@/assets/css/index/youhui.scss";
</style>