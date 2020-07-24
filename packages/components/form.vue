<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-18 14:43:14
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-21 21:06:34
-->
<template>
  <div class="lx-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LxForm', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {

    }
  },
  provide () {
    return {

      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  created () {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
