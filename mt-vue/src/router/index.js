import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import goodsList from '@/page/goodsList.vue'


Vue.use(Router)

export default new Router({
  // 路由变化就刷新页面
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      // 重定向
      redirect: '/index',
      children: [{
        // 动态路由
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
