<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-19 16:39:35
-->
<template>
     <button  @click="handleClick($event)" class="lx-button" :class="[`lx-button--${type}`,{
         'is-plain':plain,
         'is-round':round,
         'is-circle ':circle,
          'is-disabled': disabled
     }]"
     :disabled="disabled"
     >
     <i v-if="icon" :class="icon"></i>
         <span v-if="$slots.default">
            <slot></slot>
         </span>
     </button>
</template>

<script>

export default {
  name: 'LxButton', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    round: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    circle: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.plain)
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.lx-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.lx-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.lx-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.lx-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.lx-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.lx-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素的按钮
.lx-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.lx-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.lx-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.lx-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.lx-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.lx-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.lx-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.lx-button.is-circle {
padding: 12px;
border-radius: 50%;
}

.lx-button [class*=lx-icon-]+span{
    margin-left: 5px;
}

// 禁用按钮
.lx-button.is-disabled,
.lx-button.is-disabled:focus,
.lx-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.lx-button--primary.is-disabled,
.lx-button--primary.is-disabled:active,
.lx-button--primary.is-disabled:focus,
.lx-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.lx-button--success.is-disabled,
.lx-button--success.is-disabled:active,
.lx-button--success.is-disabled:focus,
.lx-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.lx-button--info.is-disabled,
.lx-button--info.is-disabled:active,
.lx-button--info.is-disabled:focus,
.lx-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.lx-button--warning.is-disabled,
.lx-button--warning.is-disabled:active,
.lx-button--warning.is-disabled:focus,
.lx-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.lx-button--danger.is-disabled,
.lx-button--danger.is-disabled:active,
.lx-button--danger.is-disabled:focus,
.lx-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}

// .lx-button
</style>
