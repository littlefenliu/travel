// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决click300ms延迟问题 npm fast click模块
import fastClick from 'fastclick'
// 在项目入口处引用css
import 'styles/reset.css'
// 解决1像素边框问题
import 'styles/border.css'
// 引入iconfont.css
import 'styles/iconfont.css'


Vue.config.productionTip = false
    // fastclick解决延迟问题
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

// 路由设置：根据句路由的地址不同 返回不同的页面