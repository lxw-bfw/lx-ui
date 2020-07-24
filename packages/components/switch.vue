<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 21:26:44
-->
<template>
  <div
    class="lx-switch"
    :class="{ 'is-checked': value }"
    @click="handleClick"
  >
    <input class="lx-switch__input" type="checkbox" :name="name" ref="input" />
    <span ref="core" class="lx-switch__core">
      <span class="lx-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LxSwitch', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {}
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  created () {},
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
// .lx-button
.lx-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .lx-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lx-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .lx-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
}
.lx-switch.is-checked {
  .lx-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .lx-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
