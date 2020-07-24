<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-22 09:59:49
-->
<template>
  <div class="lx-input" :class="{'lx-input--suffix':isSuffix}">
    <input
      :type="showPassword? showpassToggle:type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleClick($event)"
      class="lx-input__inner"
      :class="{ 'is-disabled': disabled }"
    />
    <span class="lx-input__suffix">
      <i class="lx-input__icon lx-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="lx-input__icon lx-icon-view" v-if="showPassword" @click="passwordVisivle=!passwordVisivle"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LxInput', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {
      passwordVisivle: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  created () {},
  methods: {
    handleClick (event) {
      this.$emit('input', event.target.value)
    },
    clear () {
      this.$emit('input', '')
    }
  },
  computed: {
    isSuffix: function () {
      return this.clearable || this.showPassword
    },
    showpassToggle: function () {
      return this.passwordVisivle ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
// .lx-button
.lx-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  padding: 10px 0;
  .lx-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 清除图标或切换密码图标
.lx-input--suffix {
  .lx-input__inner {
    padding-right: 30px;//预留30px
  }
  .lx-input__suffix {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
</style>
