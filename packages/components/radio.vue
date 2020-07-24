<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 19:50:08
-->
<template>
  <label class="lx-radio" :class="{'is-checked': model === label}">
    <span class="lx-radio__input">
      <span class="lx-radio__inner"></span>
      <input class="lx-radio__original" type="radio" :name="name" :value="label" v-model="model" />
    </span>
    <span class="lx-radio__label">
      <slot></slot>
      <span v-if="!$slots.default">{{label}}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LxRadio', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {
      passwordVisivle: false
    }
  },
  inject: {
    RadioGroup: {
      //  如果是包装在RadioGroup组件内部的话，那么provide传递给它的数据，如果不是默认值是’‘
      default: ''
    }
  },
  props: {
    // label标识每一个父组件调用radio组件传入的内容
    label: {
      type: String,
      default: ''
    },
    // value，父组件v-model绑定的属性，它具有唯一性，判断label与valuer是否相等是组件控制是否选中的依据，用于判断是哪种情况是单独使用radio还是包裹在radio-group
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  created () {},
  methods: {},
  computed: {
    // v-model绑定计算属性，需要提供get和set
    // 这里model绑定的值可能是raido组件单独使用通过v-model传入也可能是被包裹在父组件RadioGroup中，通过父/祖先组件RadioGroup利用provide传入
    model: {
      get () {
        console.log(this.isGroup)

        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 这里是value参数是raido的vvalue属性也就是label props
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
        console.log(value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.lx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .lx-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .lx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lx-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }

}
.lx-radio.is-checked {
  .lx-radio__input {
    .lx-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .lx-radio__label {
    color: #409eff;
  }
}
</style>
