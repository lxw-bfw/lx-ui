<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-20 11:13:08
-->
<template>
  <transition name="dialog-fade">
  <div class="lx-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <!-- 读写结构赋值语法 -->
    <div class="lx-dialog" :style="{width,marginTop:top}">
      <div class="lx-dialog__header">
        <!-- title：可以通过prop修改，也可以通过具名插槽修改，插槽的优先级高于props -->
        <slot name="title">
          <span class="lx-dialog__title">{{ title }}</span>
        </slot>

        <button class="lx-dialog__headerbtn" @click="handleClose">
          <i class="lx-icon-close"></i>
        </button>
      </div>
      <div class="lx-dialog__body">
          <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <!-- dialog底部的内容完全由父组件分发。 -->
      <div class="lx-dialog__footer" v-if="$slots.footer">
           <!-- footer插槽-->
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'LxDialog', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // console.log(this.plain)
  },
  methods: {
    handleClose () {
      // 切换显示，无法直接修改props里面的属性visible，所以通过sync修饰符实现
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
// 基本样式
.lx-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .lx-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .lx-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lx-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .lx-button:first-child {
        margin-right: 20px;
      }
      .lx-button:first-child{
        margin-right: 15px;
      }
    }
  }

}

// 动画效果
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
