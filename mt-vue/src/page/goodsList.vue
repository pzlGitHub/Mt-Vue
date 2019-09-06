<template>
    <div class="page-product">
        <!-- 两行 -->
        <el-row>
            <crumbs />
        </el-row>
        <el-row>
            <!-- 两列 -->
            <el-col :span="19">
                <!-- 两行 -->
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                map + fav
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue';
import Categroy from '@/components/products/categroy.vue';
import List from '@/components/products/list.vue';

export default {
    components: {
        crumbs,
        Categroy,
        List
    }
}
</script>

