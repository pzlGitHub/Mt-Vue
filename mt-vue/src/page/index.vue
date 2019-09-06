<template>
    <div class="page-index">
        <!-- 列 -->
        <el-low>
            <el-col :span="5">
                <my-menu />
            </el-col>
            <el-col :span="19">
                <my-life />
            </el-col>
        </el-low>
        <el-low>
            <el-col :span="24">
                <container :nav="iStyle" />
            </el-col>
        </el-low>
        <el-low>
            <el-col :span="24">
                <youhui :nav="recomment" />
            </el-col>
        </el-low>
    </div>
</template>

<script>
import MyMenu from '@/components/index/menu.vue';
import MyLife from '@/components/index/life.vue';
import Container from '@/components/index/container.vue';
import Youhui from '@/components/index/youhui.vue';

export default {
    data () {
        return {
            iStyle: {
                class: 'istyle',
                title: '有格调',
                list: [{
                    text: '全部',
                    tab: 'all'
                },{
                    text: '约会聚餐',
                    tab: 'food'
                },{
                    text: '丽人SPA',
                    tab: 'spa'
                },{
                    text: '电影演出',
                    tab: 'movie'
                },{
                    text: '品质出游',
                    tab: 'travel'
                }]
            },
            recomment: {
                class: 'youhui',
                title: '很优惠',
                list: [{
                    text: '全部',
                    tab: 'all'
                },{
                    text: '美食',
                    tab: 'meishi'
                },{
                    text: '休闲',
                    tab: 'xiuxian'
                }]
            }
        }
    },
    components: {
        MyMenu,
        MyLife,
        Container,
        Youhui
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
</style>