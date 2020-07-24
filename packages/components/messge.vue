<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-24 11:43:50
-->
<template>
  <transition name="message-fade">
    <div class="lx-message" v-if="visible" :class="[`lx-message--${type}`]">
      <i :class="[`lx-icon-${type}`]"></i>
      <span class="message-text">
        {{ message }}
      </span>

      <i v-if="showClose" class="lx-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LxMessage", // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data() {
    return {
      type: "info",
      visible: false,
      message: "这是一条消息提示!!!",
      duration: 3000,
      showClose: false
    };
  },
  props: {},
  created() {
    console.log("messge");
    console.log(this.showClose);
  },
  mounted() {
    // 挂载的时候就开始计时，300ms后消失
    this.setTimer();
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close(); // 3000ms之后调用关闭方法
      }, this.duration);
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.lx-message {
  //   z-index: 9999;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
  height: 60px;
  //  text-align: center;
  line-height: 60px;
  border-radius: 5px;
  background: #edf2fc;
  color: #303133;
  font-size: 14px;
  padding-left: 20px;

  i {
    margin-right: 3px;
  }
  .message-text {
    display: inline-block;
    width: 91%;
  }
  .lx-icon-close {
    display: inline-block;
    //  float: right;
    font-size: 17px;
    opacity: 0.5;
    transition: 0.7s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
.lx-message--info {
  background: #edf2fc;
}
.lx-message--sucess {
  background: #dcffefd3;
  color: rgb(48, 194, 104);
}
.lx-message--warning {
  color: #ecae51;
  background: #ffdec9;
}
.lx-message--error {
  background: #ffe2e2;
  color: rgb(255, 108, 108);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.7s;
}
.message-fade-enter, .message-fade-leave-to
/* .message-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
