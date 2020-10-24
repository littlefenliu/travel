import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    // 创建数据
    state: {
        city: '厦门'
    },
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity(state, city) {
            state.city = city
        }
    }
})