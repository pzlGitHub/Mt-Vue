<template>
<!-- 第一列 -->
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <!-- showWrapperActive父级传过来的判断点击任意一个下拉框另一个下拉框展示内容会消失 -->
        <div :class="{'mt-content': true, 'active': showWrapperActive}">
            <h2>{{title}}</h2>
            <div class="wrapper">
                <div class="col">
                    <span :class="{'mt-item': true, 'active': item == value}" v-for="(item, index) in list" :key="index" @click="changeValue(item)">{{item}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: [
        'list',
        'value',
        'title',
        'showWrapperActive'
    ],
    methods: {
        showWrapper (e) {
            e.stopPropagation();
            // this.showWrapperActive =true;
            // 触发自定义事件的方法  父级自定义的事件
            this.$emit('change_active', true);
        },
        // 当点击其他地方的时候就会消失展示的内容
        documentClick () {
            // this.showWrapperActive = false;
            // 触发自定义事件的方法  父级自定义的事件
            this.$emit('change_active', false);
        },
        changeValue(item) {
            this.$emit('change', item);
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>