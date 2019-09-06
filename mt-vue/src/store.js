import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 初始化的值
const state = {
    position: '深圳'
};

const mutation = {
    // 上面的数据，获取更换的地址val
    stePosition (state, val) {
        state.position = val;
    }
}  

const actions = {
    // 上面的数据，获取更换的地址val
    stePosition ({ commit }, val) {
        // 异步请求后端获取数据
        commit('stePosition', val)
    }
}
// 导出vuex实例
export default new Vuex.Store({
    state,
    mutation,
    actions
});
