/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-07-24 10:41:55
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-24 12:05:31
 */ 

import LxMessage from '../components/messge.vue'


/**
 * @name: 
 * @description: 封装messge提示框插件，核心：extend的使用,$el属性
 * @msg: 
 * @param {type}  Vue:传入Vue构造器
 * @return: Function
 */
function Message(Vue) {
    // js api控制显示，采用extend方法进行安装，提供全局api $messgae进行显示和传递参数控制颜色和内容
    const MessageConstructor = Vue.extend(LxMessage);// 传入组件选项生成构造器

    let nId = 1

    // 安装和显示
    /**
     * @name: 
     * @description: 
     * @msg: 
     * @param {Object | String} options 
     * @param options.message 
     * @param options.type 
     * @param options.showClose 
     * @param options.duration 
     * @return: 
     */
    const showMessage = (options) => {
       
        nId++
        options = options || {}
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        console.log(options)
        
        let messageObj = new MessageConstructor({
            el: document.createElement('div'),
            data() {
                return {
                  ...options
                }
            }
        })
        // 修改message.vue里面data对象的visible属性，显示组件
        messageObj.visible = true
        console.log(messageObj.showClose)
        
        document.body.appendChild(messageObj.$el)
        // 后插入的message组件z-index加一、保证能盖在之前的上面
        Vue.nextTick(function () {
            // DOM 更新了
            messageObj.$el.style.zIndex = nId + 1001
          })
        return messageObj
    }

    // 同element-ui一样，在给showMessage绑定四个方法，直接调用，比如this.$message.error()
    ['success', 'warning', 'info', 'error'].forEach(type => {
        showMessage[type] = options => {
            if (typeof options === 'string') {
                options = {
                    message: options
                };
            }
            options.type = type;
            return showMessage(options);
        }
    })
    console.log('message插件创建')
    
    return showMessage
    
}

export default Message


