<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-22 10:25:16
-->
<template>
    <div class="lx-form-item">
    <label class="lx-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="lx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lxFormItem', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {

    }
  },
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  created () {},
  methods: {},
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lx-form-item {
  margin-bottom: 25px;
  .lx-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 10px 12px 0 0;
    box-sizing: border-box;
  }
  .lx-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
