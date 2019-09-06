<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue';
export default {
  data() {
    return {
      nav: [
        {
          key: "s-deault",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        {
          image: "//p1.meituan.net/tdctraveldark/5cddf51eaf62ebdf2234b012473b04cf1769145.jpg@220w_125h_1e_1c",
          title: "深圳欢乐谷",
          type: "food",
          score: "4.7",
          commentNum: 91952,
          tab: ["大型游乐场", "华侨城"],
          address: "南山区华侨城侨城西街",
          avgPrice: 191,
          dealItems: [
            {
              title: "深圳欢乐谷,夜场成人票",
              price: 85,
              counterPrice: 100,
              saleNum: 14692,
            },
            {
              title: "深圳欢乐谷,夜场成人票",
              price: 85,
              counterPrice: 100,
              saleNum: 14692,
            }
          ],
          youhui: 2
        },
        {
          image: "//p1.meituan.net/tdctraveldark/5cddf51eaf62ebdf2234b012473b04cf1769145.jpg@220w_125h_1e_1c",
          title: "深圳欢乐谷",
          type: "food",
          score: "4.7",
          commentNum: 91952,
          tab: ["大型游乐场", "华侨城"],
          address: "南山区华侨城侨城西街",
          avgPrice: 191,
          dealItems: [
            {
              title: "深圳欢乐谷,夜场成人票",
              price: 85,
              counterPrice: 100,
              saleNum: 14692,
            },
            {
              title: "深圳欢乐谷,夜场成人票",
              price: 85,
              counterPrice: 100,
              saleNum: 14692,
            }
          ],
          youhui: 8
        }
      ]
    };
  },
  components: {
      Item
  }
};
</script>