/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-21 21:51:53
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 22:04:30
 */
import Vue from 'vue'
import App from './App.vue'
import LxUi from '../packages/index'

Vue.config.productionTip = false

Vue.use(LxUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
