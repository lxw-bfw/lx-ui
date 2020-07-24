#### 使用

```javascript
安装
yarn add @mr.xiaowei/lx-ui

引入
import LxUi from '@mr.xiaowei/lx-ui'
import '@mr.xiaowei/lx-ui/lx-ui.css'
Vue.use(LxUi)

例子——message提示框:

调用方式一
this.$message({
  type:'info' | 'sucess' | 'warning' | 'error',
  message:'这是一条消息提示',
  duration:3000,
  showClose:false //是否显示隐藏按钮
})

调用方式二
this.$message.info('这是一条消息提示')


其他具体例子可以暂时查看example里面的demo示例
```

#### 笔记和说明

##### 封装这个简易的vue ui组件库的目的
1. 进一步掌握和熟悉组件封装的语法和技巧
2. 学会造轮子，了解element-ui组件库的实现原理
3，学习封装相关思维模式，为基础库、组件、全局插件等打下基础
4. 搭建和积累自己的组件库。

##### 涉及知识点
vue基础语法
组件基本语法
组件通讯(sync,provide,inject)
插槽的使用
props校验
过渡与动画处理
计算属性与监听属性
v-model语法糖
extend方法
$mount方法
vue插件机制
npm发布

##### 组件的使用说明文档

###### 组件还在完善和补充当中，文档也会尽快开始编写...

可以查看examples目录里面的demo示例
![text](https://note.youdao.com/yws/api/personal/file/ECA03C58CA1742DEB295F4F095B86E84?method=download&shareKey=6f6c184232a10e01e4c6f04c9ea19d91)


![text](https://note.youdao.com/yws/api/personal/file/867E689246E643E886B1C8A3E15A6FC5?method=download&shareKey=4f17c47562ffd0bada82d0674f72a5ea)

![text](https://note.youdao.com/yws/api/personal/file/CBDDDA5A6027480198B26C2F4A873825?method=download&shareKey=ca2463a2e166da0ff44f24f2e51f3cad)

![text](https://note.youdao.com/yws/api/personal/file/FCB4DA9B613D4163A81FFCAEF12828E4?method=download&shareKey=138ddd556e79a71baa7ce2a62f945417)

![text](https://note.youdao.com/yws/api/personal/file/1F3C67A9E18A42C98D57F390A48CB5C1?method=download&shareKey=3558dc5ef74d472e8499320b79ef36ba)


##### 涉及的一些组件封装过程

###### 每一个组件的固有内容
1. 参数支持，参数描述参数作用，类型、默认值，怎么传参和校验
2. 事件支持，封装的组件提供需求的某些事件，比如dialog提供一个opened事件表示模态框的显示事件
3. 使用到的插槽说明，插槽：更灵活的内容分发
4. 样式设计。

###### 封装组件
1. 字体图标支持
引入font字体图标文件和css样式存放在assert，使用icong
2. 使用props校验，默认值的作用，类型校验，针对情况判断的实现
3. 封装click事件，暴露事件对象可以操作组件内部标签对于 dom元素。
4. class动态绑定语法设计：数组，数组里面可以是对象，对象里面的class可以根据条件移除移入，并列的calss则根据props属性直接字符串显示比如type
5. 对字体图标通过属性选择器，减少一个class类的写入。
6. extend方法使用，封装通过api控制组件模板以及组件的显示和隐藏

###### 各类型组件各自css样式的设计
1. 按钮button：基础样式默认样式、不同type的按钮样式、plain样式、circle样式、is-disabled样式，选择器比如属性选择器的使用

###### 目前封装的组件说明
- button封装。没太多难点，基本都是vue的基础只是，和按钮标签本身的一些属性
- diaog组件
3. 同一个位置既支持props参数，也支持slot分发，把内容包裹进去slot标签内部，使用props不使用slot的时候正常显示，不使用props使用slots的时候也正常显示。这样设计的话插槽的优先级高于prop
4. 插槽的作用：插槽内部存放默认内容比如一个默认的标签显示默认内容，可以利用插槽分发内容动态修改
5. 使用到默认插槽、具名插槽对diaog不同部分进行分发内容
6. 控制显示隐藏,同一使用visible属性控制组件的显示和隐藏，本质是v-show属性，也就是元素的display属性控制，css隐藏,点击父元素空白部分隐藏，只要阻滞事件冒泡就行，这样子元素点击后不会触发父元素点击事件
7. 关于props里面的属性一般不允许子组件直接修改的，比如触发一个方法修改props里面的某个属性这是不允许的，所以对应这种情况一般可以采用计算属性，对props中需要特殊处理的属性进行特殊处理后显示，还有一种是使用async，比如dialog的显示和隐藏，有一部分是需要点击子组件内部的元素触发的。
8. 使用sync修饰符，实现子组件内部修改父组件传递的props属性，本质是一个语法糖，表示如下语法
```html
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```
也就是如果你使用sync修饰符，那么你可以直接使用触发事件的方式修改props里面的属性
```javascript
this.$emit('update:foo', newValue)
```
9. 简单是transition动画实现切换dialog显示和隐藏的时候带动画效果
10. scoped的原理是什么，以及怎么来实现vue组件通过css样式修改其他组件引入的元素的样式。
scope的原理
> 1. scoped会给当前组件中的模板中的所有元素添加一个随机的属性
> 2. scoped会给当前组件中的设置的所有样式添加属性选择器
关于组件与组件之间的样式修改
> 1. 无所谓去除scoped属性的，可以直接去除scoped属性修改，但是注意此时它就没有作用域的保护了，要小心不要影响到封装的外部租价你本身的样式
> 2. 必须保持组件内部的样式作用域，也就是不能去除scoped的，那就得利用vue提供的深度选择器了，属于css部分，可以到vue loader文档那里查阅。
11. vue css深度选择器
可以查阅官方文档，它的本质是：vue组件内部可以通过提供style标签带scoped属性，这样的话style内部的所有样式只会被应用到当前组件的元素，即使其他组件与你的类名是一样。深度选择器提供给style标签加scoped属性的组件，提供给当前组件的样式作用更深层次，如果你平常在业务开发的时候一般都徐娅修改其他组件的样式，但是业务复杂的话一般我们还是需要使用scoped来保持作用域的。所以深度选择器是一个合适的选择。原理是去除属性选择器。

- input组件封装
1. 关于表单控件的双向绑定指令v-model原理
> 首先它是一个语法糖，这里我以input输入框为例说明它的语法糖封装的内容
```
当我们在一个vue组件页面使用input输入框，加入v-model指令
<input v-model="username"> 
它等价于
<input :value="usernam" @input="$event.target.value">
```
2. 控制密码切换显示，你是怎么实现的
> 首先不能直接修改type，那么借助一个新的data属性表示是否显示密码bol，对type进行修改，type感觉是否显示密码切换按钮进行判断如果否那就直接传入props的type，如果是，那就传入一个计算属性，计算属性根据xxxx自动返回password还是text。保证了我内部实现了功能，也不用修改父组件传入的prpos属性
- switch组件封装
1. 样式，点击切换颜色可以是选中的样式和非选中的样式加过渡，但是由于支持用户传入选中的背景颜色和不选中的背景颜色，所以点击switch的时候需要设置css背景颜色也就是还是需要dom操作
2. nexttick，netxtick提供一个回调函数，函数会在下一次dom更新循环结束之后触发。有这个东西原因是vue更新dom是异步更新，不是说vm.xx =xxx修改了数据就同步更新绑定了对应的属性的dom，它具体更新时机是vue会产生一个tick也就是异步队列，缓冲发生在此事件循环中的所有数据改变，异步队列执行开始更新dom。而nexttick时机是发生在改上一个tick循环借宿也就是dom更新结束后触发。
2.1 首先vue修改数据，是同步任务，同一事件循环中所有的同步任务都在主线程执行，此时是第一个tick循环
2.2 第一个tick循环本身会产生一个异步队列缓存数据修改，此时属于第二个tick
2.3第一个tick执行dom更新，并且在它结束之后，开始触发下一个tick，在这个tick里面获取到更新之后的dom结构。也就是nextick
2.4 异步产生：promise.then()或者是mesageChaneel，如果执行环境都不支持的话，会采用setimeout(fnj,0)代替。，

流程图
![流程图](https://segmentfault.com/img/bV17xC?w=423&h=512)


- radio组件封装
1. radio是一个单选框，比如在三个选型abc进行选选择，点击一个raido，radio呈现选中和不选择状态切换，使用value属性各自绑定对应的选项
```js
<input type="radio" v-model="pick" v-bind:value="a">

```
2. 内部封装过程，关键是选中状态的切换：维护一个父组件的v-model的value，传入的lable，触发radio inputv-model绑定一个计算属性，通过set拦截选中radio事件触发input事件修改父组件的v-model value，通过label与父组件的v-model value是否一致判断是否选中
3. 学到的用法：表单控件的v-mode属性与计算属性的配合，通过set来快速获取比如单选框复选框的value值

- radio ground组件
1. radio groud属于radio组件组容器，用于承载多个radio组件
2. 难点是使用radiogroud的时候，v-model不是绑定在radio组件上的，而是绑定在radio-groud上的，而radio-groud本身内部是使用slot插槽来显示包裹在radio-groud标签的radio组件的，这就造成一个问题，radio组件如何来接收v-model指定的参数，原本是v-model直接绑定在radio，raiod组件内部使用props的vlaue接收以及触发iinput事件来修改v-model，但是现在v-model绑定在radio0-groud上了，就不能这样接收了，采用方案是provide/inject来实现radio从raido-groud组件上获取信息。
所以raido获取v-model的值有两种情况一种是provide/injec还有一种是直接通过props value，这里我通过一个计算属性判断，如果是provide/injedct的话，raido组件内部的ipnut的v-moole般的的model计算属性的get就要从inject获取，set的话就要触发radio-groud组件的input事件来修改value，如果不是的话就按照原来的方式。
3. vue选项参数之provide/inject
> provide：Object | () => Object；
> inject: Array<String> | { [key: string]: string | Symbol | Object }
> 详细：provide 和 inject 主要在开发高阶插件/组件库时使用，不推荐用于普通函数应用程序代码中
> 这对选项参数需要一起使用，以允许一个祖先组件向其中所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下文游关系成立的事件里始终生效。

- chekckbox组件封装
1. 单独使用checkbox组件的时候v-model传入的一般是布尔类型，根据点击切换bol值改变选中状态
2. 一般checkbox复选框都是多个一起选择的，所以v-model一般是绑定一个数组来保存多选的结果，这里需要借助checkbox-group组件。

- form 与 form-tem组件，可以方便将表单控件组件整合在一起
```html
 <lx-form :model="model" labelWidth="100px">
         <lx-form-item label="用户名">
           <lx-input placeholder="请输入用户名" v-model="model.username"></lx-input>
         </lx-form-item>
          <lx-form-item label="激活">
            <lx-switch v-model="model.active" activeColor="#f56c6c"></lx-switch>
         </lx-form-item>
      </lx-form>

```

- message组件
1. api 触发。
```javascript
方式一
this.$message({
  type:'info' | 'sucess' | 'warning' | 'error',
  message:'这是一条消息提示',
  duration:3000,
  showClose:false //是否显示隐藏按钮
})
方式二
this.$message.sucess('请求成功')
```
2. extend与$mount方法的使用。
3. $el属性的使用，主要是移除的时候，将挂载dom进行移除
4. 快捷方法的封装，比如可以直接使用`this.$message.sucess`代替message方法传入选项参数，本质：函数也是一个对象
5. 挂载dom需要时间，操作dom可以结合nextick回调函数