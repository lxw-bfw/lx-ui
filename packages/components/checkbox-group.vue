<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 20:35:25
-->
<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LxCheckboxGroup', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {}
  },
  provide () {
    return {

      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  },
  created () {
    console.log(this.value)
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
