<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue';
import hot from '@/components/changeCity/hot.vue';
import Category from '@/components/changeCity/category.vue';

export default {
    data () {
        return {
            hotList: ['北京', '上海', '广州', '深圳', '天津', '西安','重庆', '杭州','南京', '武汉','成都'],
            rencentList: ['上海', '广州', '深圳']
        }
    },
    components: {
        Province,
        hot,
        Category
    }
}
</script>

<style lang="scss">
// @import "@/assets/css/changecity/select.scss";
</style>