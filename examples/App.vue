<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-07-21 21:51:53
 * @LastEditors: lxw
 * @LastEditTime: 2020-07-24 11:48:01
-->
<template>
  <div id="app">
    <h4>lx-ui组件库——按钮</h4>
    <div class="row">
      <lx-button>按钮</lx-button>
      <lx-button type="default">默认按钮</lx-button>
      <lx-button type="primary">按钮</lx-button>
      <lx-button type="info">按钮</lx-button>
      <lx-button type="success">按钮</lx-button>
      <lx-button type="danger">按钮</lx-button>
    </div>
    <div class="row">
      <lx-button type="default" plain>朴素按钮</lx-button>
      <lx-button type="primary" plain>朴素按钮</lx-button>
      <lx-button type="info" plain>朴素按钮</lx-button>
      <lx-button type="success" plain>朴素按钮</lx-button>
      <lx-button type="danger" plain>朴素按钮</lx-button>
    </div>
    <div class="row">
      <lx-button type="default" plain round>圆角按钮</lx-button>
      <lx-button type="primary" plain round>圆角按钮</lx-button>
      <lx-button type="info" plain round>圆角按钮</lx-button>
      <lx-button type="success" plain round>圆角按钮</lx-button>
      <lx-button type="danger" plain round>圆角按钮</lx-button>
    </div>
    <div class="row">
      <lx-button
        @click="
          clickVal === 'click事件'
            ? (clickVal = '圆')
            : (clickVal = 'click事件')
        "
        type="default"
        plain
        circle
        >{{ clickVal }}</lx-button
      >
      <lx-button
        type="primary"
        icon="lx-icon-milk-tea"
        plain
        circle
      ></lx-button>
      <lx-button
        type="info"
        plain
        icon="lx-icon-potato-strips"
        circle
      ></lx-button>
      <lx-button type="success" plain circle>圆形按钮</lx-button>
      <lx-button type="danger" plain circle>圆形按钮</lx-button>
    </div>
    <div class="row">
      <lx-button>禁用按钮</lx-button>
      <lx-button type="default" disabled>禁用按钮</lx-button>
      <lx-button type="primary" disabled>禁用按钮</lx-button>
      <lx-button type="info" disabled>禁用按钮</lx-button>
      <lx-button type="success" disabled>禁用按钮</lx-button>
      <lx-button type="danger" disabled>禁用按钮</lx-button>
    </div>

    <h4>lx-ui组件库——dialog</h4>
    <div class="row">
      <lx-button type="primary" @click="visiblestate = true"
        >dialog显示</lx-button
      >
    </div>

    <!-- 对话框 -->
    <lx-dialog
      title="测试dialog"
      width="80%"
      top="20px"
      :visible.sync="visiblestate"
    >
      <!-- 使用具名插槽title修改dialog组件的标题部分 -->
      <template v-slot:title>
        <h4>通过slot分发的标题内容</h4>
      </template>
      <!-- 通过默认插槽分发dialogbody内容 -->
      <div>
        <lx-form :model="user" labelWidth="100px">
          <lx-form-item style="width:80%;" label="用户名">
            <lx-input
              placeholder="请输入用户名"
              v-model="user.username"
            ></lx-input>
          </lx-form-item>
          <lx-form-item label="激活" style="text-align:left;">
            <lx-switch v-model="user.active" activeColor="#f56c6c"></lx-switch>
          </lx-form-item>
          <lx-form-item style="width:80%;text-align:left;" label="爱好">
            <lx-checkbox-group v-model="user.hobies1">
              <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
              <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
              <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
            </lx-checkbox-group>
          </lx-form-item>
        </lx-form>
      </div>
      <!-- 通过具名插槽footer为footer分发内容 -->
      <template v-slot:footer>
        <lx-button @click="visiblestate = false">取消</lx-button>
        <lx-button type="primary">确定</lx-button>
      </template>
    </lx-dialog>

    <h4>lx-ui组件库——message提示框</h4>
    <div class="row">
      <lx-button @click="showMessage('info')">
        打开消息提示
      </lx-button>
      <lx-button @click="showMessage('close')">
        带关闭按钮
      </lx-button>
      <lx-button @click="showMessage('sucess')">
        成功
      </lx-button>
      <lx-button @click="showMessage('warning')">
        警告
      </lx-button>
      <lx-button @click="showMessage('error')">
        错误
      </lx-button>
    </div>

    <h4>lx-ui组件库——input输入框</h4>
    <div class="row">
      <lx-input
        style="width:60%;"
        type="text"
        disabled
        name="username"
        placeholder="请输入用户名"
      ></lx-input>
      <lx-input
        style="width:60%;"
        type="text"
        v-model="shopname"
        placeholder="请输入商品名"
      ></lx-input>
      <lx-input
        style="width:60%;"
        type="text"
        v-model="couresename"
        clearable
        placeholder="请输入课程名"
      ></lx-input>
      <lx-input
        style="width:60%;"
        type="text"
        v-model="password"
        showPassword
        placeholder="密码"
      ></lx-input>
    </div>
    <h4>lx-ui组件库——switch按钮</h4>
    <div class="row">
      <lx-switch v-model="active" activeColor="#f56c6c"></lx-switch>
    </div>
    <h4>lx-ui组件库——单选框lx-radio</h4>
    <div class="row">
      <lx-radio v-model="mySex" label="0">男</lx-radio>
      <lx-radio v-model="mySex" label="1">女</lx-radio>
    </div>
    <h4>lx-ui组件库——单选框组lx-radio-group</h4>
    <div class="row">
      <lx-radio-groud v-model="fruit">
        <lx-radio label="2">苹果</lx-radio>
        <lx-radio label="3">香蕉</lx-radio>
        <lx-radio label="4">芒果</lx-radio>
      </lx-radio-groud>
    </div>
    <h4>lx-ui组件库——复选框lx-checkbox</h4>
    <div class="row">
      <lx-checkbox label="1" v-model="hoby" name="hoby">篮球</lx-checkbox>
    </div>
    <h4>lx-ui组件库——复选框组lx-checkbox-group</h4>
    <div class="row">
      <lx-checkbox-group v-model="hobies">
        <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
        <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
        <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
      </lx-checkbox-group>
    </div>
    <h4>lx-ui组件库——form表单和form-item——包裹表单控件组件</h4>
    <div class="row">
      <lx-form :model="model" labelWidth="100px">
        <lx-form-item style="width:80%;" label="用户名">
          <lx-input
            placeholder="请输入用户名"
            v-model="model.username"
          ></lx-input>
        </lx-form-item>
        <lx-form-item label="激活" style="text-align:left;">
          <lx-switch v-model="model.active" activeColor="#f56c6c"></lx-switch>
        </lx-form-item>
        <lx-form-item style="width:80%;text-align:left;" label="爱好">
          <lx-checkbox-group v-model="model.hobies1">
            <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
            <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
            <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
          </lx-checkbox-group>
        </lx-form-item>
        <lx-form-item style="width:80%;">
          <lx-button>重置</lx-button>
          <lx-button type="primary">提交</lx-button>
        </lx-form-item>
      </lx-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clickVal: "click事件",
      visiblestate: false,
      shopname: "",
      username: "",
      couresename: "大学英语",
      password: "",
      active: false,
      mySex: "",
      fruit: "2",
      hoby: "",
      hobies: [],
      model: {
        username: "",
        active: false,
        hobies1: []
      },
      user: {
        username: "",
        active: false,
        hobies1: []
      }
    };
  },
  components: {},
  methods: {
    testclick() {},
    showMessage(type) {
      if (type === "close") {
        this.$message({
          showClose: true
        });
      } else {
        this.$message({
          type: type
        });
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  max-width: 1200px;
  margin: 0 auto;
  // padding-left: 30%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .row {
    margin-bottom: 30px;
    .lx-button {
      margin-right: 10px;
    }
  }
}
</style>
