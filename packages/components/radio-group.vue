<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 19:39:04
-->
<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LxRadioGroud', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {}
  },
  provide () {
    return {

      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  created () {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
