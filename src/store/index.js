import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    // 创建数据
    state: state,
    mutations: mutations,
    getters: {
        doubleCities(state) {
            return state.city + '' + state.city;
        }
    }
})