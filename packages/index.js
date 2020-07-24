/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-21 21:58:17
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-24 10:51:56
 */

import LxButton from './components/button.vue'
import LxDialog from './components/dialog.vue'
import LxInput from './components/input.vue'
import LxSwitch from './components/switch.vue'
import LxRadio from './components/radio.vue'
import LxRadioGroud from './components/radio-group.vue'
import LxCheckbox from './components/checkbox.vue'
import LxCheckboxGroup from './components/checkbox-group.vue'
import lxFormItem from './components/form-item.vue'
import LxForm from './components/form.vue'

// api插件：组件 + js控制，核心是extend方法
import Message from './plugins/message'

import './fonts/font.scss'
// packages目录的入口文件，也是我们的封装的vue组件库的入口文件，提供一个install方法

// 存储组件列表
const components = [
  LxButton,
  LxDialog,
  LxInput,
  LxSwitch,
  LxRadio,
  LxRadioGroud,
  LxCheckbox,
  LxCheckboxGroup,
  lxFormItem,
  LxForm,
]

// 定义一个install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都见被注册
const install = function (Vue) {
  components.forEach(item => {
    // 注册所有组件
    Vue.component(item.name, item)
  })
  // 注册插件
  Vue.prototype.$message = Message(Vue)
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
// 比如v-router这些可以通过script标签直接雨引入。
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
