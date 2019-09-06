<template>
    <div class="m-menu">
        <!-- 左边导航栏 绑定鼠标移出事件 -->
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <!-- 绑定鼠标移入事件 -->
            <dd v-for="(itme, index) in menuList" :key="index" @mouseenter="menuEnter(itme)">
                <i :class="itme.icon"></i>
                {{ itme.title }}
                <span class="arrow"></span>
            </dd>
        </dl>
        <!-- 导航栏展示区域 绑定鼠标移入和移出事件  -->
        <div v-if="curDatail" class="detail" @mouseenter="datailEnter" @mouseleave="datailLeave">
            <template v-for="(itme, index) in curDatail.children">
                <h4 :key="index">{{ itme.title }}</h4>
                <span v-for="(v, i) in itme.children" :key="v + '_' + i" >{{ v }}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            curDatail: null,
            // 标题，图标，展示的内容 根据数据渲染
            menuList: [{
                title: '美食',
                icon: 'food',
                children: [{
                    title: '美食',
                    children: ['代金券', '甜点', '饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤', '烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜']
                }]
            },{
                title: '外卖',
                icon: 'takeout',
                children: [{
                    title: '外卖',
                    children: ['美团外卖']
                }]
            },{
                title: '酒店',
                icon: 'hotel',
                children: [{
                    title: '酒店星级',
                    children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '榛果民宿',
                icon: 'homestay',
                children: [{
                    title: '热门城市',
                    children: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州']
                },{
                    title: '热门房源',
                    children: ['复式', 'Loft别墅']
                }]
            },{
                title: '猫眼电影',
                icon: 'movie',
                children: [{
                    title: '热映电影',
                    children: ['速度与激情','特别行动哪吒之魔童降世', '烈火英雄', '诛仙Ⅰ', '铤而走险', '名侦探柯南' ,'绀青之拳', '宝莱坞机器人2.0','重生归来深夜食堂徒手攀岩使徒行者2', '谍影行动']
                },{
                    title: '热门影院',
                    children: ['金逸影城','中影', 'UL城市影院', '星美国际影城', '中影国际影城', '万达影城', '博纳国际影城', '太平洋电影城', '大地影院', '橙天嘉禾影城', '雅图数字影院']
                }]
            },{
                title: '机票 / 火车票',
                icon: 'airport',
                children: [{
                    title: '机票',
                    children: ['国内机票国际/港澳台机票']
                },{
                    title: '火车票',
                    children: ['火车票']
                }]
            },{
                title: '休闲娱乐 / KTV',
                icon: 'ktv',
                children: [{
                    title: '美食',
                    children: ['足疗按摩', '洗浴/汗蒸', '酒吧', '密室逃脱', '轰趴馆','茶馆', '私人影院', 'DIY手工坊', '采摘/农家乐', '网吧网咖', '游乐游艺', 'VR桌面游戏', '真人CS', '棋牌室其他玩乐']
                },{
                    title: 'KTV',
                    children: ['KTV']
                }]
            },{
                title: '生活服务',
                icon: 'life',
                children: [{
                    title: '生活服务',
                    children: ['衣物/皮具洗护', '家政', '搬家运输', '送水', '充值缴费', '服饰/鞋包养护', '开锁换锁', '居家维修', '管道疏通', '家电维修清洗', '电脑维修', '手机维修','证件照/肖像摄影', '照片冲印/图文文印', '商务服务/法律服务', '文化传媒机构', '成人用品/情趣用品']
                }]
            },{
                title: '丽人 / 美发 / 医学美容',
                icon: 'hair',
                children: [{
                    title: '丽人',
                    children: ['美发', '美甲', '美睫', '美容', '美体', '医学美容', '瑜伽舞蹈','瘦身纤体', '韩式定妆', '祛痘', '纹身', '化妆品', '养发']
                }]
            },{
                title: '结婚 / 婚纱摄影 / 婚宴',
                icon: 'marry',
                children: [{
                    title: '结婚',
                    children: ['婚纱摄影', '旅拍', '个性写真', '婚宴', '婚庆公司', '婚纱礼服', '西服定制', '婚戒首饰', '婚车租赁', '司仪主持', '彩妆造型', '婚礼跟拍', '婚礼小礼品', '更多婚礼服务']
                }]
            },{
                title: '亲子 / 儿童乐园 / 幼教',
                icon: 'offspring',
                children: [{
                    title: '儿童乐园',
                    children: ['婴儿游泳', '其它亲子游乐']
                },{
                    title: '幼儿教育',
                    children: ['早教中心', '少儿英语', '智力开发', '托班/幼儿园', '幼儿教育', '其他幼儿教育']
                },{
                    title: '亲子摄影',
                    children: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影']
                },{
                    title: '孕产护理',
                    children: ['月子会所', '产后恢复', '妇幼医院', '孕产用品', '开奶催乳', '月嫂', '亲子购物', '宝宝派对', '亲子服务']
                }]
            },{
                title: '运动健身 / 健身中心',
                icon: 'sport',
                children: [{
                    title: '运动健身',
                    children: ['健身中心', '武术场馆', '游泳馆', '羽毛球馆', '溜冰场', '射箭馆', '篮球场', '网球馆', '台球馆', '乒乓球', '足球场', '高尔夫场', '保龄球馆', '体育场馆', '马术场', '壁球馆', '更多运动']
                }]
            },{
                title: '家装 / 建材 / 家居',
                icon: 'furniture',
                children: [{
                    title: '家装',
                    children: ['家装']
                }]
            },{
                title: '学习培训 / 音乐培训',
                icon: 'study',
                children: [{
                    title: '学习培训',
                    children: ['学习培训']
                }]
            },{
                title: '医疗健康 / 宠物 / 爱车',
                icon: 'health',
                children: [{
                    title: '医疗健康',
                    children: ['医疗健康']
                }]
            },{
                title: '酒吧 / 密室逃脱',
                icon: 'bar',
                children: [{
                    title: '酒吧',
                    children: ['酒吧']
                }]
            }]
        }
    },
    methods: {
        // 移入展示内容 - 移出消失内容
        // 用延时器检测一下鼠标是否移入展示的内容的区域 - 没有移入展示内容的区域则让展示的内容消失
        // - 移入了展示内容的区域则清除定时器（让展示的内容继续展示） - 当鼠标不在展示内容的区域时 - 消失内容
        menuEnter(itme) {
            // console.log(itme);
            this.curDatail = itme;
        },
        menuLeave () {
            let self = this;
            this.timer = setTimeout(function () {
                self.curDatail = null;
            }, 200);
        },
        datailEnter () {
            clearTimeout(this.timer);
        },
        datailLeave () {
            this.curDatail = null;
        }
    }
}
</script>






 


 


















